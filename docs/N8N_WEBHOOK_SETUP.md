# n8n Webhook Setup for Echo Skool Quiz

This guide explains how to set up the n8n workflow to handle quiz submissions from the Echo Skool Waitlist landing page.

## Prerequisites

- n8n instance running (cloud or self-hosted)
- Access to create workflows
- Email service configured (Gmail, SendGrid, etc.)
- Optional: Google Calendar access for creating events
- Optional: Airtable/CRM access for storing leads

## Webhook Data Structure

The quiz form sends the following JSON payload to your n8n webhook:

```json
{
  "timestamp": "2025-09-25T10:00:00Z",
  "serverTimestamp": "2025-09-25T10:00:00Z",
  "formData": {
    "communityType": "course_creator",
    "communitySize": "51-500",
    "challenges": ["support_questions", "content_creation"],
    "aiExperience": "regular_user",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "selectedDate": "2025-09-27",
    "selectedTime": "14:00",
    "timezone": "America/New_York"
  },
  "source": "echo_skool_waitlist",
  "quizScore": 85,
  "userAgent": "Mozilla/5.0...",
  "ip": "192.168.1.1"
}
```

## Step 1: Create Webhook Trigger

1. Create a new workflow in n8n
2. Add a **Webhook** node
3. Set HTTP Method to **POST**
4. Set Path to something memorable like `/echo-quiz`
5. Copy the Production URL (looks like: `https://your-n8n.com/webhook/abc123/echo-quiz`)

## Step 2: Process Lead Score

Add a **Code** node to categorize leads:

```javascript
const quizScore = $input.first().json.quizScore;
let priority = 'standard';

if (quizScore >= 80) {
  priority = 'hot';
} else if (quizScore >= 60) {
  priority = 'warm';
} else {
  priority = 'cold';
}

return [{
  json: {
    ...$input.first().json,
    leadPriority: priority,
    shouldFastTrack: quizScore >= 80
  }
}];
```

## Step 3: Create Calendar Event

Add a **Google Calendar** node:

1. Connect your Google account
2. Set Operation to **Create Event**
3. Configure the event:
   - Calendar: Your calendar ID
   - Title: `Echo Pilot Call - ${formData.name}`
   - Start: Combine `selectedDate` and `selectedTime`
   - Duration: 30 minutes
   - Description: Include all quiz responses
   - Add attendee: `formData.email`

## Step 4: Send Confirmation Email

Add an **Email** node (Gmail, SendGrid, etc.):

**Subject:** Your Echo AI Pilot Call is Confirmed!

**Body Template:**
```html
Hi {{formData.name}},

Your pilot program strategy call has been confirmed for:
Date: {{formData.selectedDate}}
Time: {{formData.selectedTime}} {{formData.timezone}}

Meeting Link: [Will be sent separately]

Based on your quiz responses, here's what we'll cover:
- How Echo can solve your {{formData.challenges}} challenges
- Custom implementation for your {{formData.communityType}} community
- ROI projections for your {{formData.communitySize}} members

See you soon!
The Echo Team
```

## Step 5: Add to CRM/Database

Add an **Airtable** node (or your preferred CRM):

1. Connect your Airtable account
2. Set Operation to **Create Record**
3. Map fields:
   - Name → `formData.name`
   - Email → `formData.email`
   - Score → `quizScore`
   - Priority → `leadPriority`
   - Community Type → `formData.communityType`
   - Meeting Date → `formData.selectedDate`
   - Meeting Time → `formData.selectedTime`

## Step 6: Send Slack Notification (Optional)

Add a **Slack** node for instant notifications:

```
🎯 New Pilot Lead!
Name: {{formData.name}}
Score: {{quizScore}}/100 ({{leadPriority}})
Community: {{formData.communitySize}} members
Meeting: {{formData.selectedDate}} at {{formData.selectedTime}}
```

## Step 7: Handle Errors

Add an **Error Trigger** node connected to an email notification:
- Send alert if any step fails
- Include error details for debugging

## Complete Workflow Structure

```
[Webhook] 
  → [Code: Score Lead]
  → [Branch]
      → High Score (≥80): [Fast Track Path]
          → [Google Calendar]
          → [Priority Email Template]
          → [Slack Alert]
      → Normal Score: [Standard Path]
          → [Google Calendar]
          → [Standard Email]
  → [Airtable: Store Lead]
  → [Response: Success]
```

## Testing

1. Use the Test URL from your webhook node
2. Send a test payload using Postman or curl:

```bash
curl -X POST https://your-n8n.com/webhook-test/echo-quiz \
  -H "Content-Type: application/json" \
  -d '{
    "formData": {
      "name": "Test User",
      "email": "test@example.com",
      "communityType": "course_creator",
      "communitySize": "51-500",
      "challenges": ["support_questions"],
      "aiExperience": "regular_user",
      "selectedDate": "2025-09-27",
      "selectedTime": "14:00",
      "timezone": "America/New_York"
    },
    "quizScore": 75,
    "source": "echo_skool_waitlist"
  }'
```

## Production Deployment

1. Activate the workflow
2. Add the Production webhook URL to your `.env.local`:
   ```
   N8N_WEBHOOK_URL=https://your-n8n.com/webhook/abc123/echo-quiz
   ```
3. Deploy your Next.js app
4. Monitor webhook executions in n8n

## Advanced Features

### SMS Reminders
Add a Twilio node to send SMS reminders 1 hour before the meeting.

### Lead Nurturing
Create a follow-up workflow that sends educational content based on their quiz responses.

### Calendly Integration
Instead of Google Calendar, redirect to a Calendly link with pre-filled data:
```
https://calendly.com/your-name/echo-pilot?name={{formData.name}}&email={{formData.email}}
```

### Meeting Recording
Automatically create a Zoom meeting and include the link in the confirmation email.

## Troubleshooting

- **Webhook not receiving data**: Check CORS settings and ensure URL is correct
- **Calendar event not creating**: Verify Google Calendar permissions
- **Email not sending**: Check email service API credentials
- **Timezone issues**: Use moment.js in a Code node to handle timezone conversions

## Support

For help with n8n setup, visit: https://docs.n8n.io
For Echo-specific questions, refer to the main project documentation.
import { z } from 'zod'

export const quizSchema = z.object({
  communityType: z.string().min(1, 'Please select your community type'),
  communitySize: z.string().min(1, 'Please select your community size'),
  challenges: z.array(z.string()).min(1, 'Please select at least one challenge'),
  aiExperience: z.string().min(1, 'Please select your AI experience level'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  selectedDate: z.string().min(1, 'Please select a date'),
  selectedTime: z.string().min(1, 'Please select a time'),
  timezone: z.string().min(1, 'Please select your timezone'),
})

export type QuizFormData = z.infer<typeof quizSchema>

export const quizQuestions = {
  step1: {
    title: "What type of community do you run?",
    description: "This helps us tailor Echo to your specific needs",
    type: "radio" as const,
    options: [
      { value: "course_creator", label: "Course Creator", description: "I sell courses and educational content" },
      { value: "coaching", label: "Coaching/Consulting", description: "I offer coaching or consulting services" },
      { value: "saas", label: "SaaS Community", description: "I run a community for my software product" },
      { value: "agency", label: "Agency/Service", description: "I run an agency or service business" },
      { value: "other", label: "Other", description: "Something different" }
    ]
  },
  step2: {
    title: "How many members are in your community?",
    description: "We'll customize Echo's capabilities to your scale",
    type: "radio" as const,
    options: [
      { value: "0-50", label: "Just Starting", description: "0-50 members" },
      { value: "51-500", label: "Growing", description: "51-500 members" },
      { value: "501-2000", label: "Established", description: "501-2,000 members" },
      { value: "2000+", label: "Large", description: "2,000+ members" }
    ]
  },
  step3: {
    title: "What are your biggest challenges right now?",
    description: "Select all that apply",
    type: "checkbox" as const,
    options: [
      { value: "support_questions", label: "Too many support questions", description: "Answering the same questions repeatedly" },
      { value: "content_creation", label: "Can't scale content creation", description: "Not enough time to create content" },
      { value: "engagement", label: "Members not engaging", description: "Low participation and activity" },
      { value: "retention", label: "Losing members", description: "Members leaving due to poor support" },
      { value: "repetitive", label: "Repetitive tasks", description: "Too much time on manual tasks" }
    ]
  },
  step4: {
    title: "How familiar are you with AI tools?",
    description: "This helps us know how much guidance you'll need",
    type: "radio" as const,
    options: [
      { value: "never", label: "Never used AI", description: "I'm new to AI tools" },
      { value: "beginner", label: "Tried ChatGPT a few times", description: "Basic familiarity" },
      { value: "regular", label: "Regular AI user", description: "I use AI tools weekly" },
      { value: "power", label: "AI power user", description: "I use AI tools daily" }
    ]
  }
}

export const timezones = [
  { value: "America/New_York", label: "Eastern Time (EST/EDT)" },
  { value: "America/Chicago", label: "Central Time (CST/CDT)" },
  { value: "America/Denver", label: "Mountain Time (MST/MDT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PST/PDT)" },
  { value: "America/Phoenix", label: "Arizona Time" },
  { value: "Europe/London", label: "London (GMT/BST)" },
  { value: "Europe/Paris", label: "Central European Time" },
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Asia/Singapore", label: "Singapore Time" },
  { value: "Australia/Sydney", label: "Sydney (AEDT/AEST)" },
]

export function getAvailableTimeSlots(date: Date): string[] {
  const slots: string[] = []
  const dayOfWeek = date.getDay()
  
  // Skip weekends
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return []
  }
  
  // Available hours: 9 AM to 5 PM EST
  const hours = [9, 10, 11, 12, 13, 14, 15, 16]
  
  hours.forEach(hour => {
    slots.push(`${hour.toString().padStart(2, '0')}:00`)
    slots.push(`${hour.toString().padStart(2, '0')}:30`)
  })
  
  return slots
}

export function formatTimeSlot(time: string): string {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
  return `${displayHour}:${minutes} ${ampm}`
}

export function getNext14Days(): Date[] {
  const dates: Date[] = []
  const today = new Date()
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push(date)
    }
  }
  
  return dates
}

export function calculateLeadScore(data: QuizFormData): number {
  let score = 0
  
  // Community size scoring
  switch (data.communitySize) {
    case "0-50": score += 10; break
    case "51-500": score += 25; break
    case "501-2000": score += 40; break
    case "2000+": score += 50; break
  }
  
  // Challenge scoring (more challenges = higher score)
  score += data.challenges.length * 10
  
  // AI experience scoring (less experience = higher score for our help)
  switch (data.aiExperience) {
    case "never": score += 20; break
    case "beginner": score += 15; break
    case "regular": score += 10; break
    case "power": score += 5; break
  }
  
  // Community type scoring
  switch (data.communityType) {
    case "course_creator": score += 15; break
    case "coaching": score += 15; break
    case "saas": score += 10; break
    case "agency": score += 10; break
    case "other": score += 5; break
  }
  
  return Math.min(100, score) // Cap at 100
}
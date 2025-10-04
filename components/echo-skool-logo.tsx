import * as React from "react"
import { cn } from "@/lib/utils"

interface EchoSkoolLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
  showTagline?: boolean
}

export function EchoSkoolLogo({ 
  size = "lg", 
  showTagline = false,
  className,
  style,
  ...props 
}: EchoSkoolLogoProps) {
  const sizeConfig = {
    sm: {
      container: { paddingRight: "60px", position: "relative" as const, display: "inline-block" },
      echo: { fontSize: "36px", fontWeight: 600, color: "#F0F0F0" },
      forSkool: { position: "absolute" as const, top: "-3px", right: "0", display: "flex", alignItems: "baseline", gap: "4px" },
      for: { fontSize: "8px", color: "#808080", fontWeight: 400 },
      skool: { fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px" }
    },
    md: {
      container: { paddingRight: "100px", position: "relative" as const, display: "inline-block" },
      echo: { fontSize: "48px", fontWeight: 600, color: "#F0F0F0" },
      forSkool: { position: "absolute" as const, top: "-6px", right: "0", display: "flex", alignItems: "baseline", gap: "4px" },
      for: { fontSize: "11px", color: "#808080", fontWeight: 400 },
      skool: { fontSize: "24px", fontWeight: 700, letterSpacing: "-0.5px" }
    },
    lg: {
      container: { paddingRight: "160px", position: "relative" as const, display: "inline-block" },
      echo: { fontSize: "80px", fontWeight: 600, color: "#F0F0F0" },
      forSkool: { position: "absolute" as const, top: "-14px", right: "0", display: "flex", alignItems: "baseline", gap: "4px" },
      for: { fontSize: "19px", color: "#808080", fontWeight: 400 },
      skool: { fontSize: "49.4px", fontWeight: 700, letterSpacing: "-0.5px" }
    },
    xl: {
      container: { paddingRight: "240px", position: "relative" as const, display: "inline-block" },
      echo: { fontSize: "120px", fontWeight: 600, color: "#F0F0F0" },
      forSkool: { position: "absolute" as const, top: "-20px", right: "0", display: "flex", alignItems: "baseline", gap: "8px" },
      for: { fontSize: "28px", color: "#808080", fontWeight: 400 },
      skool: { fontSize: "74px", fontWeight: 700, letterSpacing: "-0.5px" }
    }
  }

  const config = sizeConfig[size]

  // Override colors for light/dark mode
  const echoStyle = {
    ...config.echo,
    color: undefined // Let it use the CSS class color
  }
  
  const forStyle = {
    ...config.for,
    color: undefined // Let it use the CSS class color
  }

  return (
    <div 
      className={cn(className)} 
      style={{ ...config.container, ...style }}
      {...props}
    >
      <span 
        className="text-foreground"
        style={{
          ...echoStyle,
          fontFamily: "'Quicksand', var(--font-quicksand), sans-serif",
          fontWeight: 600
        }}
      >
        echo
      </span>
      <div style={config.forSkool}>
        <span 
          className="text-muted-foreground"
          style={forStyle}
        >
          for
        </span>
        <span style={config.skool}>
          <span className="text-skool-darkblue">s</span>
          <span className="text-skool-red">k</span>
          <span className="text-skool-yellow">o</span>
          <span className="text-skool-cyan">o</span>
          <span className="text-skool-salmon">l</span>
        </span>
      </div>
      {showTagline && (
        <p className="text-sm text-muted-foreground mt-2">AI Mentor for Skool Communities</p>
      )}
    </div>
  )
}
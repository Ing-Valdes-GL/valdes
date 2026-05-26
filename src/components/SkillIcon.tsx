import {
  SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss,
  SiNextdotjs, SiReact, SiExpress, SiFlutter, SiLaravel, SiTailwindcss,
  SiPostgresql, SiMysql, SiSupabase,
  SiGithub, SiVercel, SiExpo, SiRailway, SiRender, SiGooglecloud,
  SiVscodium, SiFigma, SiPostman, SiGooglegemini, SiOpenjdk,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

/* Mapping skill name → { Icon, color } */
const iconMap: Record<string, { Icon: IconType; hex: string }> = {
  'JavaScript':   { Icon: SiJavascript,      hex: '#F7DF1E' },
  'TypeScript':   { Icon: SiTypescript,       hex: '#3178C6' },
  'Java':         { Icon: SiOpenjdk,          hex: '#ED8B00' },
  'PHP':          { Icon: SiPhp,              hex: '#8892BE' },
  'HTML5':        { Icon: SiHtml5,            hex: '#E34F26' },
  'CSS3':         { Icon: SiCss,              hex: '#1572B6' },
  'Next.js':      { Icon: SiNextdotjs,        hex: '#ffffff' },
  'React':        { Icon: SiReact,            hex: '#61DAFB' },
  'React Native': { Icon: SiReact,            hex: '#61DAFB' },
  'Express.js':   { Icon: SiExpress,          hex: '#ffffff' },
  'Flutter':      { Icon: SiFlutter,          hex: '#54C5F8' },
  'Laravel':      { Icon: SiLaravel,          hex: '#FF2D20' },
  'Tailwind CSS': { Icon: SiTailwindcss,      hex: '#38BDF8' },
  'PostgreSQL':   { Icon: SiPostgresql,       hex: '#4169E1' },
  'MySQL':        { Icon: SiMysql,            hex: '#4479A1' },
  'Supabase':     { Icon: SiSupabase,         hex: '#3ECF8E' },
  'GitHub':       { Icon: SiGithub,           hex: '#ffffff' },
  'Vercel':       { Icon: SiVercel,           hex: '#ffffff' },
  'Expo':         { Icon: SiExpo,             hex: '#ffffff' },
  'Railway':      { Icon: SiRailway,          hex: '#B966E7' },
  'Render':       { Icon: SiRender,           hex: '#46E3B7' },
  'Google Cloud': { Icon: SiGooglecloud,      hex: '#4285F4' },
  'VS Code':      { Icon: SiVscodium,         hex: '#007ACC' },
  'Figma':        { Icon: SiFigma,            hex: '#F24E1E' },
  'Postman':      { Icon: SiPostman,          hex: '#FF6C37' },
  'Gemini':       { Icon: SiGooglegemini,     hex: '#8E75B2' },
}

/* Custom SVG logos for tools without a Simple Icon */
function ClaudeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.45 2.5a1.5 1.5 0 00-2.9 0L4.5 18.5A1.5 1.5 0 006 20.5h12a1.5 1.5 0 001.5-2L13.45 2.5zm-1.45 3l4.5 13H7L12 5.5z"/>
    </svg>
  )
}

function GrokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <text x="2" y="18" fontSize="16" fontWeight="bold" fontFamily="monospace">𝕏</text>
    </svg>
  )
}

function CursorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 3l14 9-7 1-3 7L5 3z"/>
    </svg>
  )
}

function NeonIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="12" rx="10" ry="5" opacity="0.3"/>
      <ellipse cx="12" cy="12" rx="6"  ry="2.5"/>
      <circle  cx="12" cy="12" r="2"  />
    </svg>
  )
}

function CLangIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <text x="4" y="18" fontSize="17" fontWeight="900" fontFamily="monospace">C</text>
    </svg>
  )
}

interface Props {
  name: string
  size?: number
}

export default function SkillIcon({ name, size = 22 }: Props) {
  /* Custom fallbacks */
  if (name === 'C')           return <CLangIcon    size={size} />
  if (name === 'Claude Code') return <ClaudeIcon   size={size} />
  if (name === 'Grok')        return <GrokIcon     size={size} />
  if (name === 'Cursor')      return <CursorIcon   size={size} />
  if (name === 'Neon DB')     return <NeonIcon     size={size} />

  const entry = iconMap[name]
  if (!entry) {
    /* Generic text fallback */
    return (
      <span style={{ fontSize: size * 0.55, fontWeight: 900, fontFamily: 'monospace', lineHeight: 1 }}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  const { Icon } = entry
  return <Icon size={size} />
}

/* Export hex color for a skill name (used for glow tint) */
export function getSkillHex(name: string): string {
  return iconMap[name]?.hex ?? '#ffffff'
}

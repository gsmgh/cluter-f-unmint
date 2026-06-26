import { cn } from '@/lib/utils'

interface BearbeiterProps {
  name: string
}

// Farbe je Person, damit die Lehrer auf einen Blick sehen, wer was gemacht hat.
const personStyles: Record<string, string> = {
  tim: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
  finn: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
  marcell: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300',
  team: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300',
  offen: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300',
}

export function Bearbeiter({ name }: BearbeiterProps) {
  const key = name.trim().toLowerCase()
  const styles = personStyles[key] ?? personStyles.team
  const text = key === 'offen' ? 'Noch nicht bearbeitet' : `Bearbeitet von: ${name}`

  return (
    <div
      className={cn(
        'not-prose my-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium',
        styles
      )}
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
      <span>{text}</span>
    </div>
  )
}

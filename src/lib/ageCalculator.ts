/**
 * Calculates the current age from a given birth date.
 * Updates automatically — no manual intervention needed.
 */
export function calculateAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

// Doungmo Lagoung Valdes — born 03 February 2006
export const MY_BIRTH_DATE = new Date(2006, 1, 3) // month is 0-indexed

export function getMyAge(): number {
  return calculateAge(MY_BIRTH_DATE)
}

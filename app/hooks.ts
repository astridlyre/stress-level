import { useMemo } from 'react'

export function useClasses(...classes: string[]) {
  return useMemo(() => classes.filter(Boolean).join(' '), classes)
}

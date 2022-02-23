import { useRouter } from 'next/router'
import React from 'react'

export function useQuery() {
  const router = useRouter()
  return React.useMemo(() => new URLSearchParams(router.asPath), [router])
}

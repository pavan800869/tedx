'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('https://aupulse.campx.in/aupulse/ums/public/form/679a61e1ea9ed55754a0df53') // Change this to the target link
  }, [])

  return <p>Redirecting...</p> // Optional message while redirecting
}

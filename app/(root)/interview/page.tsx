import React from 'react'
import InterviewForm from '@/components/ui/generater'
import { getCurrentUser } from '@/lib/actions/auth.action'
const page = async() => {
  const user=await getCurrentUser();
  return (
    <> 
    <h3>Interview Page</h3>
    <InterviewForm userName={user?.name ?? ''} userId={user?.id ?? ''} />
    </>
  )
}

export default page

import React from 'react'
import Agent from '@/components/ui/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
const page = async() => {
  const user=await getCurrentUser();
  return (
    <> 
    <h3>Interview Page</h3>
    <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  )
}

export default page

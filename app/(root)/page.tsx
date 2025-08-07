import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import {getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'
 async function Home(){
  const user=await getCurrentUser();
  //  if (!user || !user.id) {
  //   return <p>Unable to fetch user. Please sign in.</p>
  // }

if(!user || !user.id) return <p>user must be siged in</p>
  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id),
    getLatestInterviews({ userId: user?.id }),
  ]);
  

  const hasPastInterviews=userInterviews?userInterviews.length >0:false;
  const hasUpcomingInterviews = (allInterview?.length ?? 0) > 0;
  return (
      <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview ready with AI-powered practice & feedback</h2>
          <p className='text-lg'>Practice on real interview questions and get instant feedback</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className='max-sm:hidden' />
      </section>

      <section className='flex flex-col mt-8 gap-6'>
        <h2>Your Interviews</h2>
         <div className='interviews-section'>
            {hasPastInterviews ? (
            userInterviews && userInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
            
         </div>
      </section>
      <section className='flex flex-col mt-8 gap-6'>
        <h2>Take an interview</h2>
        <div className='interviews-section'>
         {hasUpcomingInterviews ? (
            allInterview && allInterview.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}

        </div>
      </section>
      </>
  )
}

export default Home;

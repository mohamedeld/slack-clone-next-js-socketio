import Typography from '@/components/typography'
import { Slack } from 'lucide-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='min-h-screen p-5 grid text-center place-content-center '>
        <div className="max-w-[450px]">
            <div className="flex justify-center items-center gap-3 mb-4">
                <Slack size={30} />
                <Typography variant='h2' text='Slackzz'/>
            </div>
            <Typography text='Sign in to your Slackzz' variant='h2' className='mb-3'/>
            <Typography text='We suggest using the email address that you use at work' variant='p' className='opacity-90 mb-7'/>
            <div className="flex flex-col space-y-4"></div>
        </div>
    </div>
  )
}

export default LoginPage
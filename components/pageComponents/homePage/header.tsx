import MainButton from '@/components/lib/mainButton'
import SecondaryButton from '@/components/lib/secondaryButton'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const   Header = () => {
  const router = useRouter()
  return (
    <section id='header' className='w-full flex flex-col items-center relative h-fit bg-secondary-50'>
      <div className='w-full absolute  h-[160px] '>
          <Image src={'/Matrix-Gradient-1-1-p-1600.png'} alt='matix-background' fill />
      </div>
      <div className='w-[100px] relative mt-[100px] h-[100px] '>
      <Image src={'/logo.webp'} alt='logo' fill />
      </div>

      <h1 className='text-[3.75rem] text-center font-[400] text-white '>Making money is a <span className='font-[700]'>skill.</span></h1>
      <p className='text-white text-[2.375rem] font-[400]'>We will <span className='font-[700]'>teach you</span> how to <span className='font-[700]'>master it.</span></p>

      <div className="overflow-hidden relative mt-[60px] rounded-[30px]">
        <iframe  width="800" height="443"  src="https://www.youtube.com/embed/SFtQ38-NcnU?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"></iframe></div>
      
      <div className='flex gap-[20px] my-[20px]'>
            <MainButton title="join the real world" actionFunc={() => {
              router.push('/signup')
            }} />
            <SecondaryButton title="scroll down" actionFunc={() => {
                  router.push('/login')
              }} />
      </div>

      <div className='bg-divider w-[90%] h-[2px] my-[20px]'></div>

    </section>
  )
}

export default Header
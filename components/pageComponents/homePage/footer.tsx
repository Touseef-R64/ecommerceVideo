import SecondaryButton from '@/components/lib/secondaryButton'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
const urlweb = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;
const Footer = () => {
   const  router = useRouter()
  return (
    <section className='flex flex-col items-center pb-[30px] bg-secondary-50' id='footer'>
        <div className='flex items-center gap-[20px]'>
        <div className='w-[100px] relative h-[100px] '>
      <Image src={'/logo.webp'} alt='logo' fill />
      </div>
        <SecondaryButton title="scroll down" actionFunc={() => {
                  router.push('/login')
              }} />
        </div>
        <div className='flex gap-[30px] my-[40px]'>
            <ul className='text-[20px] text-white underline flex flex-col gap-[20px] '>
                <li><a href={`${urlweb}login`}>Log In</a></li>
                <li><a href={`${urlweb}login`}>Terms & Conditions</a></li>
                <li><a href={`${urlweb}login`}>Privacy Policy</a></li>
                <li >
                    <span className='font-[600]'>Support:</span><br />
                    <a>email@123.com</a>
                </li>
            </ul>
            <ul className=' text-[#777] max-w-[320px] font-[500] text-[1.3rem] flex flex-col gap-[20px] '>
                <li>Owned and Managed by New Era Learning LLC</li>
                <li>Distributed by our partners:</li>
                <li>EU: IM FOLLOWING Sp z o oPlac Zomkaway 8/5, Warsaw, Poland 00-277</li>
                <li>US: Thrifty Consulting LLC 800 North State St Ste 403, Dover, DE 19901</li>
                <li>Legendary Courses, Inc 221 N. Broad St.Middletown, DE 19709</li>
            </ul>

        </div>
        <p className='text-white text-center mt-[30px]'>Everything taught within The Real World is for education purposes only. It is up to each student to implement and do the work.
‍<br/><br/>
The Real World team doesn’t guarantee any profits or financial success</p>
    </section>
  )
}

export default Footer
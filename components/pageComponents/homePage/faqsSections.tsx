import React from 'react'
import Faq from '../general/faq'
import MainButton from '@/components/lib/mainButton'
import { useRouter } from 'next/router'

const faqData = [{
  question: 'How quickly will I make my money back?',
  answer: `It depends on how seriously you take The Real World.

  But many students made their money back in a couple of weeks.
  
  Note: Everything taught within The Real World is for education purposes only.
  ‍
  It is up to each student to implement and do the work. The Real World team doesn’t guarantee any profits or financial success.`
},{
  question: 'How quickly will I make my money back?',
  answer: `It depends on how seriously you take The Real World.

  But many students made their money back in a couple of weeks.
  
  Note: Everything taught within The Real World is for education purposes only.
  ‍
  It is up to each student to implement and do the work. The Real World team doesn’t guarantee any profits or financial success.`
},{
  question: 'How quickly will I make my money back?',
  answer: `It depends on how seriously you take The Real World.

  But many students made their money back in a couple of weeks.
  
  Note: Everything taught within The Real World is for education purposes only.
  ‍
  It is up to each student to implement and do the work. The Real World team doesn’t guarantee any profits or financial success.`
}]


const FaqsSections = () => {
  const router = useRouter()
  return (
    <section className='w-full flex flex-col bg-secondary-50 items-center p-[30px]'>
        <h2 className='text-[48px] font-[700] text-white'>Frequently Asked Questions</h2>
        <div className='flex flex-col items-center my-[30px] w-full gap-[15px]'>
            {faqData.map((faq,idx) => {
              return <Faq key={idx} answer={faq.answer} question={faq.question} />
              
            })}
        </div>

        <MainButton title="Join Now" actionFunc={() => {
                router.push('/signup')
            }} />

    </section>
  )
}

export default FaqsSections
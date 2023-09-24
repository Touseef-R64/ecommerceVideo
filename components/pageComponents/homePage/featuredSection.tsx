import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Homefeature from './homefeature'
import MainButton from '@/components/lib/mainButton'
import { useRouter } from 'next/router'

const features = [{
    pic: '/featured img 1.png',
    icon: faGraduationCap,
    title : 'Access to Multimillionaires',
    lists: [`Mentors are \bhyper-successful experts\b in their field`, `Get \bmentored every step\b of your journey`,   `Master the key skills you need to \bmaximize your income\b`]
},
{
    pic: '/featured img 1.png',
    icon: faGraduationCap,
    title : 'Access to Multimillionaires',
    lists: [`Mentors are \bhyper-successful experts\b in their field`, `Get \bmentored every step\b of your journey`,   `Master the key skills you need to \bmaximize your income\b`]
}]


const FeaturedSection = () => {
    const router = useRouter()
  return (
    <section id='features' className='w-full flex flex-col items-center bg-secondary-50'>
    <div className='relative w-full px-[30px] my-[50px] flex flex-col items-center '>
        <div className='h-full w-[3px] bg-divider absolute '>

        </div>
        {features.map((feature,idx) => {
            return(
                <Homefeature  key={idx} icon={feature.icon} lists={feature.lists} pic={feature.pic} title={feature.title} />
            )
        })}

    </div>
    <MainButton title="join now" actionFunc={() => {
              router.push('/signup')
            }} />
    <div className='h-[2px] w-full bg-divider mt-[30px]'></div>
    </section>
  )
}

export default FeaturedSection
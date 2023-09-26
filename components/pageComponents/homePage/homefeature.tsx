import { Icon } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
interface featureItype {
    pic: string,
    icon: Icon | any,
    title: string,
    lists: string[]
}



const Homefeature = (feature : featureItype) => {
  return (
    <div className='grid grid-cols-[1fr_5rem_1fr]  grid-rows-[auto] auto-cols-fr py-[50px] relative justify-between w-full'>
        <div className='w-full relative col-span-1  h-full '>
      <Image src={feature.pic} alt='feature' fill />
      </div>
      <div className='h-full flex justify-center  relative col-span-1'>
            <div className='w-[16px] sticky shadow-[0_0_0_8px_rgba(0,0,0,0)] top-[50vh] h-[16px] rounded-full bg-main-200'></div>
      </div>
      <div className='col-span-1'>
            <div className='flex items-center gap-[10px]  '>
                <div className='bg-secondary-50 min-w-[86px] flex items-center justify-center  min-h-[86px] border-[3px] rounded-full border-white'>
                    <p className='text-[40px] text-white'><FontAwesomeIcon icon={feature.icon} /></p>
                </div>
                <h3 className='text-[38px] text-white font-[700]'>{feature.title}</h3>
                

            </div>
            <ul className='flex flex-col gap-[10px] my-[20px]  text-secondary-150 text-[20px] font-[500]'>
                        {feature.lists.map((list,idx) => {
                            return(
                        <li key={idx} className='flex items-center gap-[10px]'>
                            <span className='text-main-200 '><FontAwesomeIcon icon={faCheck} /></span>
                            <p>{list.split('\b').map((item,idx) => {
                                return(<span className={`${idx/2 === 1 ? 'text-white' : ''}`} key={idx}>
                                    {item}
                                </span>)
                            })}</p> </li>
                            )
                        })}
                    </ul>
      </div>
    </div>
  )
}

export default Homefeature
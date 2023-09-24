import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface productItype {
    icon: IconProp
    title: string
    description: string
    embed: string
}

const Product = (item: productItype) => {
  return (
    <div className='bg-[rgb(39,41,46)] hover:outline-white hover:outline-1 hover:outline transition-all ease-in hover:bg-[rgb(47,49,54)] flex flex-col items-center  max-w-[45%] rounded-[1.2rem]  p-[3rem_2rem]' >
        <div className='flex items-center mb-[30px] gap-[20px] '>
            <div className='rounded-[20px] text-[#735600] text-[26px] w-[75px] h-[75px] bg-main-200 flex items-center justify-center'>
                <FontAwesomeIcon icon={item.icon} />
            </div>
            <p className='text-[38px] font-[700] text-white'>
                {item.title}
            </p>


        </div>
        <p className='font-[500] text-[20px] text-center mb-[30px]'>
            {item.description.split('\n').map((sent,idx) => {
                return <span key={idx} className={`${sent.includes('\b') ? 'text-white':  'text-secondary-150'} `} >{sent.includes('\b') ? sent.replace('\b','') : sent}</span>
            })}
        </p>
        <div className="overflow-hidden w-full relative mt-[10px] rounded-[30px]">
        <iframe width="100%" height="230" src={item.embed} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      

    </div>
  )
}

export default Product
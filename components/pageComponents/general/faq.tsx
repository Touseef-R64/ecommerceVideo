import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

interface props {
    question: string;
    answer: string;
}

const Faq = (props: props, key: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div key={key} className={`w-full border-[1px]  border-white  bg-secondary-50 `}>
        <div onClick={() => {
          setOpen(!open)
        }} className='bg-faq-gradient border-b-[1px] border-white cursor-pointer flex font-[500] items-center text-[20px] p-[10px_20px] justify-between open text-white'>
          <p>{props.question}</p>
          <p><FontAwesomeIcon icon={faAngleDown} /></p>
        </div>
        <div className={` transition-all ease-in grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className={`w-full transition-all ease-in min-h-0 ${open ? 'p-[20px_15px]' : 'p-[0px_15px]'} text-[1.3rem] overflow-hidden text-secondary-150`}>
          {props.answer.split('\n').map((sentence,idx) => {
            return <>
              {sentence}<br/>
            </>
          })}
        </div> </div>
    </div>
  )
}

export default Faq
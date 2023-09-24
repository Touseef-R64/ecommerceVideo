
import React from 'react'

interface  props {
    title: string;
    actionFunc: () => void
}

const SecondaryButton = (props: props) => {
  return (
    <div className='relative w-fit [&>div]:hover:translate-y-0 overflow-hidden rounded-[.625rem] [&>div]:hover:rounded-none '>
      <div className='absolute w-[100%] h-[200%] inset-0 ease-out  translate-y-[50%]  rounded-full  bg-button-gradient transition-all    '>

      </div>
    <button className=' border-[1px] border-nuetral-100 text-nuetral-100 max-w-[385px] rounded-[.625rem]  p-[10px_15px] uppercase text-[1.6rem] font-[700] transition-all relative   hover:text-black overflow-hidden '
     onClick={props.actionFunc}>{props.title}</button>



     </div>
  )
}

export default SecondaryButton
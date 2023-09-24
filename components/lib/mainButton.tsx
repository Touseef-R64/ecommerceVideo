import Link from 'next/link'
import React from 'react'

interface  props {
    title: string;
    actionFunc: () => void
}

const MainButton = (props: props) => {
  return (
    <button className='bg-button-gradient border-none max-w-[385px] hover:z-10 rounded-[.625rem]  p-[10px_15px] uppercase text-[1.6rem] font-[700] transition-all ease-in hover:scale-125 '
     onClick={props.actionFunc}>{props.title}</button>
  )
}

export default MainButton
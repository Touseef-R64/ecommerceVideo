import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Product from './product'
import MainButton from '@/components/lib/mainButton'
import { useRouter } from 'next/router'

const productdata = [{
    embed: 'https://www.youtube.com/embed/XOvPLtBrUI4?si=AxHu6Hi6stCtCArO',
    title: 'E-Commerce',
    icon: faShoppingCart,
    description:   `Sell profitable products online.\b \n Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.`
},{
    embed: 'https://www.youtube.com/embed/XOvPLtBrUI4?si=AxHu6Hi6stCtCArO',
    title: 'E-Commerce',
    icon: faShoppingCart,
    description:   `Sell profitable products online.\b \n Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.`
},{
    embed: 'https://www.youtube.com/embed/XOvPLtBrUI4?si=AxHu6Hi6stCtCArO',
    title: 'E-Commerce',
    icon: faShoppingCart,
    description:   `Sell profitable products online.\b \n Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.`
}]

const ProductsSection = () => {
  const router = useRouter()
  return (
    <section className='w-full flex flex-col items-center  bg-secondary-200'>
        <div className='py-[40px] px-[30px] w-full flex flex-col items-center '>
        <h2 className='text-[40px] mb-[30px] text-white'>WHAT YOU WILL <span className='font-[700]'>LEARN</span></h2>
        <p className='text-[20px] text-center max-w-[90%] text-secondary-150'>When a <span className='text-white font-[500]'>new technology revolutionises</span> an industry, <span className='text-white font-[500]'>THE REAL WORLD</span> will be the first and <span className='text-white font-[500]'>only place to teach you how to profit from it.</span></p>
        <div className='w-full flex flex-wrap my-[40px] justify-center gap-[20px]'>
            {productdata.map((prod,idx) => {
                return(<Product key={idx} description={prod.description}
                    embed={prod.embed}
                    icon={prod.icon}
                    title={prod.title} />)
            })}
        </div>
        </div>
        <MainButton title="join now" actionFunc={() => {
              router.push('/signup')
            }} />
    <div className='h-[2px] w-full bg-divider mt-[30px]'></div>
    </section>
  )
}

export default ProductsSection
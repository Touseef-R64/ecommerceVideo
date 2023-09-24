import useWindowDimensions from '@/hooks/useWindowDimensions';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const images = ['/studentReviews/review 1.webp','/studentReviews/review 2.webp','/studentReviews/review 3.webp','/studentReviews/review 4.webp','/studentReviews/review 5.png',
'/studentReviews/review 6.png','/studentReviews/review 6.png']

const ReviewsSection = () => {

  return (
    <section id='reviews' className=' w-full bg-secondary-50 flex flex-col items-center p-[40px] '>
        <h2 className='text-white text-[48px]'>OUR STUDENTS’ <span className='font-[700]'>REVIEWS</span></h2>
        
        <div className='columns-4 gap-[20px] relative w-full mt-[50px]'>
        {images.map((item,idx) => {
            return(
                <div key={idx} className=' reounded-[15px] overflow-hidden hover:scale-150 hover:z-10 ease-out cursor-pointer transition-all  min-h-[100px] mb-[20px] relative  w-full h-auto '>
                    <img src={item} className='bg-cover ' alt='review'  loading='lazy' />
                </div>
            )
        })}
        </div>




    </section>
  )
}

export default ReviewsSection
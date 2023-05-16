import React from 'react'
import woodenwall from '../assets/woodenwall.jpg'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='border-0 bg-amber-950 text-white'>
            <img src={woodenwall} className='h-screen w-screen'/>

        </div>
    </div>
  )
}

export default Home
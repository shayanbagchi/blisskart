import React from 'react'

function Catagories() {
  return (
    <div className='flex justify-between mx-24 my-6'>
        <div className='flex w-[49.5%] h-[384px] border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform'>
          <p className='m-10 text-neutral-600 text-4xl'>Stationary & <br/> Desk Accessories</p>
        </div>
        <div className='flex flex-col justify-between w-[49.5%] h-[384px]'>
            <div className='h-[186px] border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform'>
              <p className='m-6 text-neutral-600 text-3xl'>Home & Living Decor</p>
            </div>
            <div className='flex justify-between h-[186px]'>
                <div className='w-[49%] border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform'>
                  <p className='m-6 text-neutral-600 text-2xl'>Personalized</p>
                </div>
                <div className='w-[49%] border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform'>
                  <p className='m-6 text-neutral-600 text-2xl'>Posters & Prints</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catagories
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-700 flex flex-col gap-2 justify-center fixed bottom-0 w-full items-center'>
        <div className="logo font-bold text-2xl text-white">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>
        </div>
        <div className='text-white text-xl'>
            Created by Sparsh Jain
        </div>
    </div>
  )
}

export default Footer

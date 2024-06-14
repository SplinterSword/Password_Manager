import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-700 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-14">
            <div className="logo font-bold text-2xl">
                <span className="text-green-500">&lt;</span>
                Pass
                <span className="text-green-500">OP/&gt;</span>
            </div>
            {/* <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="#">About</a>
                    <a className='hover:font-bold' href="#">Contact</a>
                </li>
            </ul> */}
            <button className='text-white my-5 px-3 py-1 rounded-lg flex gap-2 justify-center items-center'>
                <img className='invert w-9' src="github.svg" alt="github logo" />
                GitHub
            </button>
        </div>
    </nav>
  )
}

export default Navbar

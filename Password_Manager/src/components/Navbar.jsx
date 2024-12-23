import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-700 text-white min-h-[6.2vh]'>
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
            <a href="https://github.com/SplinterSword/Password_Manager.git">
                <button className='text-white my-5 px-3 py-1 rounded-lg flex gap-2 justify-center items-center ring-white ring-1'>
                    <img className='invert w-9' src="github.svg" alt="github logo" />
                    GitHub
                </button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar

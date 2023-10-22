import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { TfiMenu } from 'react-icons/tfi'
import { useScrollContext } from '../providers/ScrollContext'

export default function Header() {
  const { home, skills, aboutme, projects, services } = useScrollContext()
  const [openedMenu, setOpenedMenu] = useState(false)

  const scrollToRef = (ref: React.RefObject<HTMLElement> | null) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='w-full py-14 flex flex-col items-center'>
      <div className='w-4/5 flex justify-between items-center'>
        <img src={Logo} alt="Logo" />
        <div onClick={() => setOpenedMenu(!openedMenu)} className='hidden cursor-pointer max-lg:block'>
          <TfiMenu color={'white'} size={25}/>
        </div>
        <nav className='max-lg:hidden'>
          <ul className='flex items-center gap-14'>
            <li onClick={() => scrollToRef(home)} className='text-white/60 text-xl lowercase hover:text-white hover:border-b-2 hover:border-b-[#68F] h-10 cursor-pointer'>Ínicio</li>
            <li onClick={() => scrollToRef(projects)} className='text-white/60 text-xl lowercase hover:text-white hover:border-b-2 hover:border-b-[#68F] h-10 cursor-pointer'>Projetos</li>
            <li onClick={() => scrollToRef(aboutme)} className='text-white/60 text-xl lowercase hover:text-white hover:border-b-2 hover:border-b-[#68F] h-10 cursor-pointer'>Quem sou?</li>
            <li onClick={() => scrollToRef(services)} className='text-white/60 text-xl lowercase hover:text-white hover:border-b-2 hover:border-b-[#68F] h-10 cursor-pointer'>Serviços</li>
            <li onClick={() => scrollToRef(skills)} className='text-white/60 text-xl lowercase hover:text-white hover:border-b-2 hover:border-b-[#68F] h-10 cursor-pointer'>Conhecimentos</li>
          </ul>
        </nav>
      </div>
      <nav className={`${openedMenu ? 'flex justify-center items-center h-screen w-4/5' : 'hidden'} lg:hidden`}>
        <ul className='flex flex-col items-center gap-4 w-full'>
          <li onClick={() => scrollToRef(home)} className='text-white/60 text-xl lowercase hover:text-white hover:bg-white/[.05] h-10 cursor-pointer bg-white/[.02] w-full flex items-center rounded-sm justify-center'>Ínicio</li>
          <li onClick={() => scrollToRef(projects)} className='text-white/60 text-xl lowercase hover:text-white hover:bg-white/[.05] h-10 cursor-pointer bg-white/[.02] w-full flex items-center rounded-sm justify-center'>Projetos</li>
          <li onClick={() => scrollToRef(aboutme)} className='text-white/60 text-xl lowercase hover:text-white hover:bg-white/[.05] h-10 cursor-pointer bg-white/[.02] w-full flex items-center rounded-sm justify-center'>Quem sou?</li>
          <li onClick={() => scrollToRef(services)} className='text-white/60 text-xl lowercase hover:text-white hover:bg-white/[.05] h-10 cursor-pointer bg-white/[.02] w-full flex items-center rounded-sm justify-center'>Serviços</li>
          <li onClick={() => scrollToRef(skills)} className='text-white/60 text-xl lowercase hover:text-white hover:bg-white/[.05] h-10 cursor-pointer bg-white/[.02] w-full flex items-center rounded-sm justify-center'>Conhecimentos</li>
        </ul>
      </nav>
    </header>
  )
}
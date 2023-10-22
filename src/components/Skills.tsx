import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiTailwindcss, SiSass, SiReact, SiStyledcomponents } from 'react-icons/si'
import { IoLogoJavascript }  from 'react-icons/io5'
import { FaBootstrap, FaLess } from 'react-icons/fa'
import { BiLogoTypescript, BiLogoVuejs, BiLogoAngular } from 'react-icons/bi'
import { useScrollContext } from '../providers/ScrollContext'

export default function Skills () {
  const { skills } = useScrollContext()
  return (
    <section ref={skills} className="w-full flex flex-col items-center justify-center gap-10 py-10">
      <h3 className="text-center text-white text-2xl font-medium">conhecimentos</h3>
      <div className="w-4/5 grid grid-cols-6 gap-4 max-lg:grid-cols-1 max-xl:grid-cols-3">
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <AiFillHtml5 size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">html</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <SiCss3 size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">css</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <IoLogoJavascript size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">javascript</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <BiLogoTypescript size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">typescript</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <SiReact size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">react</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <BiLogoVuejs size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">vue</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <BiLogoAngular size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">angular</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <SiTailwindcss size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">tailwind</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <FaBootstrap size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">bootstrap</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <SiSass size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">sass</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <FaLess size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">less</p>
        </div>
        <div className="group h-[10.3125rem] relative bg-white/[0.02] border border-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#6688FF] duration-200 cursor-pointer">
          <SiStyledcomponents size={50} className='text-white group-hover:text-[#6688FF]'/>
          <p className="text-white font-bold rounded-sm group-hover:text-[#6688FF]">styled components</p>
        </div>
      </div>
    </section>
  )
}
import UiIcon from '../assets/ui-icon.svg'
import FrontIcon from '../assets/front-icon.svg'
import { useScrollContext } from '../providers/ScrollContext'

export default function Services () {
  const { services } = useScrollContext()
  return (
    <section ref={services} className="w-full flex flex-col items-center justify-center gap-10 bg-[#ffffff02] py-10">
      <h3 className="text-white font-medium text-2xl">serviços</h3>
      <div className='w-4/5 flex flex-col gap-4'>
        <div className='bg-service bg-center bg-cover bg-no-repeat w-full p-8 flex flex-col gap-4 border border-white/5 hover:border hover:border-[#6688FF] duration-500 cursor-pointer'>
          <img src={FrontIcon} className='w-14'/>
          <h4 className="w-max text-white text-xl font-normal border-b border-[#6688FF] pb-2">frontend</h4>
          <p className="text-white text-opacity-60 text-base font-medium">Front-end é a parte de sites e aplicativos que você vê e interage, sendo criada por desenvolvedores para tornar a experiência do usuário visualmente atraente e funcional, usando tecnologias como HTML, CSS e JavaScript.</p>
        </div>
        <div className='bg-service bg-center bg-cover bg-no-repeat w-full p-8 flex flex-col gap-4 border border-white/5 hover:border hover:border-[#6688FF] duration-500 cursor-pointer'>
          <img src={UiIcon} className='w-14'/>
          <h4 className="w-max text-white text-xl font-normal border-b border-[#6688FF] pb-2">ui design</h4>
          <p className="text-white text-opacity-60 text-base font-medium">UI (User Interface) refere-se à forma como os elementos de um site ou aplicativo são organizados e apresentados, tornando a interação do usuário mais amigável e eficaz. Designers de UI cuidam do layout, cores, ícones e outros aspectos visuais para garantir uma experiência positiva do usuário.</p>
        </div>
      </div>
    </section>
  )
}
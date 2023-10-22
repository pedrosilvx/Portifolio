import Logo from '../assets/logo.svg'

export default function Footer () {
  return (
    <footer className='w-full flex items-center justify-center py-10 bg-[#ffffff02]'>
      <div className='w-4/5 flex items-center justify-between'>
        <p className='text-white/50 text-lg max-md:text-xs'>Copyright © 2023. Todos os direitos reservados.</p>
        <img src={Logo} />
      </div>
    </footer>
  ) 
}
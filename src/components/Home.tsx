import { useScrollContext } from "../providers/ScrollContext"

export default function Home () {
  const { home } = useScrollContext()

  function redirectToGithub () {
    window.open('https://github.com/pedrosilvx', '_blank')
  }
  
  function redirectToDiscord () {
    window.open('https://discord.gg/SQD5v6pdpN', '_blank')
  }

  return (
    <section ref={home} className="w-full flex flex-col items-center justify-center gap-6 h-screen">
      <div className='w-4/5 flex flex-col gap-6 -mt-24'>
        <h1 className="text-white text-[2.5rem] max-md:text-[1.5rem] lowercase">Elevando sua Experiência Digital <br /> com <strong className="text-[#68F]">Qualidade</strong> e <strong className="text-[#68F]">Profissionalismo</strong></h1>
        <p className="text-white/60 lowercase text-xl max-md:text-base font-normal">Reimaginando o Futuro Digital com Inovação de Ponta. Sua Visão, Nossa Paixão: <br /> Transformando-a em Realidade.</p>
        <div className="flex items-center gap-4">
          <button onClick={redirectToGithub} className="w-60 h-16 text-white text-xl max-md:text-sm bg-white/5 rounded-lg hover:opacity-50 duration-500">projetos</button>
          <button onClick={redirectToDiscord} className="w-60 h-16 text-white text-xl max-md:text-sm bg-[#68F] rounded-lg hover:opacity-50 duration-500">contate-me</button>
        </div>
      </div>
    </section>
  )
}
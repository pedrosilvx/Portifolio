import { useScrollContext } from "../providers/ScrollContext"

export default function Projects () {
  const { projects } = useScrollContext()

  function redirectToDiscord () {
    window.open('https://discord.gg/SQD5v6pdpN', '_blank')
  }

  return (
    <section ref={projects} className="w-full flex flex-col items-center gap-10 bg-[#ffffff02] py-10">
      <h3 className="text-white font-medium text-2xl">projetos</h3>
      <div className="flex flex-col gap-10 w-4/5">
        <h4 className="w-max text-white text-base border-b-2 border-b-[#68F] pb-3">em destaque</h4>
        <div className="flex items-center gap-2 max-lg:flex-col">
          <div onClick={redirectToDiscord} className="bg-skinshop bg-center bg-cover grayscale bg-no-repeat w-1/3 max-lg:w-full h-60 bg-gray-500 p-6 flex flex-col border border-transparent justify-end flex-none hover:border hover:border-[#68f] duration-500 cursor-pointer hover:grayscale-0">
            <h5 className="text-white text-base border-b-2 border-b-white w-max">skinshop</h5>
            <p className="text-white/60 text-xs mt-1">clique para visitar.</p>
          </div>
          <div onClick={redirectToDiscord} className="bg-dealership bg-center bg-cover grayscale bg-no-repeat w-1/3 max-lg:w-full h-60 bg-gray-500 p-6 flex flex-col border border-transparent justify-end flex-none hover:border hover:border-[#68f] duration-500 cursor-pointer hover:grayscale-0">
            <h5 className="text-white text-base border-b-2 border-b-white w-max">dealership</h5>
            <p className="text-white/60 text-xs mt-1">clique para visitar.</p>
          </div>
          <div onClick={redirectToDiscord} className="bg-hud bg-center bg-cover grayscale bg-no-repeat w-1/3 max-lg:w-full h-60 bg-gray-500 p-6 flex flex-col border border-transparent justify-end flex-none hover:border hover:border-[#68f] duration-500 cursor-pointer hover:grayscale-0">
            <h5 className="text-white text-base border-b-2 border-b-white w-max">hud</h5>
            <p className="text-white/60 text-xs mt-1">clique para visitar.</p>
          </div>
        </div>
      </div>
      <small className="text-white text-xs font-medium">ver repositórios no <a href="https://github.com/pedrosilvx" target="_blank" className="text-[#6688FF]">github</a>.</small>
    </section>
  )
}
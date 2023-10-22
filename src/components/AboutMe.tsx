import { useScrollContext } from "../providers/ScrollContext";

export default function AboutMe() {
  const { aboutme } = useScrollContext();
  return (
    <section
      ref={aboutme}
      className="w-full flex flex-col items-center gap-10 py-10 relative"
    >
      <h3 className="text-white font-medium text-2xl">quem sou?</h3>
      <div className="w-4/5 flex flex-col items-start justify-start gap-4">
        <h2 className="text-white text-3xl font-bold">Pedro Augusto Silva</h2>
        <h4 className="text-white text-xl font-normal border-b border-[#6688FF] pb-2">
          frontend developer & ui designer.
        </h4>
        <p className=" text-white text-opacity-60 text-xl font-normal">
          Olá a todos! Meu nome é Pedro, tenho 20 anos, estou aprimorando minhas
          habilidades na área de Front-End/UI, transformando minha paixão por
          design e tecnologia em uma carreira gratificante! Minha jornada
          começou com a descoberta do fascinante mundo do desenvolvimento
          front-end, onde aprendi a linguagem das interfaces digitais. Ao longo
          do tempo, meu objetivo tem sido criar experiências de usuário
          cativantes, onde o equilíbrio entre estética e usabilidade é
          fundamental. Acredito que a primeira impressão é crucial, e é por isso
          que estou constantemente em busca de maneiras criativas de aprimorar a
          forma como as pessoas interagem com a tecnologia. Trabalho com
          tecnologias como HTML, CSS e JavaScript para dar vida às ideias,
          transformando-as em interfaces visualmente atraentes e fáceis de usar.
          Minha abordagem combina design e desenvolvimento, equilibrando a
          estética com a funcionalidade. Acredito que a colaboração é a chave
          para o sucesso, e estou sempre ansioso para trabalhar em equipe,
          compartilhando ideias e conhecimento para alcançar resultados
          excepcionais. Estou entusiasmado com o potencial da tecnologia e como
          podemos moldar o futuro digital. Estou à disposição para colaborar em
          projetos desafiadores e emocionantes, onde posso aplicar minha
          experiência para criar interfaces incríveis e proporcionar
          experiências únicas aos usuários. Vamos juntos criar o próximo grande
          sucesso!
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center bg-black">
        <div className="mx-auto container max-w-6xl">
          <div className="max-w-fit">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Rafael Angonese
            </h1>
            <span className="text-white flex justify-end">
              Criando mundos com letras e números.
            </span>
          </div>

          <p className="text-gray-200 mt-8 text-xl">
            Sou um desenvolvedor web full-stack focado em frontend.
          </p>

          <p className="text-gray-400 mt-2 tex-lg">
            Eu me especializei na criação de software utilizando as melhores
            tecnologias que são amplamente utilizadas e valorizadas no mercado
            de tecnologia.
          </p>

          <p className="text-gray-200 font-bold mt-8 text-xl">
            Pressione ctrl K para iniciar →
          </p>

          {/* <p className="text-gray-400 mt-4 text-xl">
            Precisando de um desenvolvedor? Vamos trabalhar juntos!
          </p> */}
          {/* <p className="text-gray-400 mt-4 text-xl">
            Eu me especializei na criação de software para clientes que vão
            desde indivíduos e pequenas empresas até grandes corporações. O que
            você faria se tivesse um especialista em software disponível ao seu
            alcance?
          </p> */}

          {/* <p>Pixel-Perfect Code</p>
          <p>Built With Love</p>

          <p>NEED A DESIGNER? Let’s work together</p> */}
        </div>
      </div>
    </>
  );
}

import ShortcutHome from "components/screens/Home/Shortcut";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-full">
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

          <ShortcutHome />
        </div>
      </div>
    </>
  );
}

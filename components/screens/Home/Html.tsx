import { KBarQuery } from "kbar";
import React from "react";

interface HtmlProps {
  query: KBarQuery;
}

const Html: React.FC<HtmlProps> = ({ query }) => {
  return (
    <div className="relative">
      <div className="absolute top-[50vh] w-screen flex justify-center">
        <div className="max-w-fit">
          <h1 className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            Rafael Angonese
          </h1>
          <span className="text-white sm:text-lg text-base flex sm:justify-end justify-center text-center">
            Criando mundos com letras e números.
          </span>
        </div>
      </div>

      <div className="absolute top-[120vh] w-screen flex justify-center">
        <div className="max-w-fit">
          <h2 className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-green-500 text-center">
            Prepare-se para concretizar suas ideias criativas.
          </h2>

          <span className="text-white sm:text-2xl text-xl flex xl:justify-end justify-center text-center">
            Eu gosto de criar experiências épicas divertidas e interativas com
            código.
          </span>
        </div>
      </div>

      <div className="absolute top-[200vh] w-screen flex justify-center">
        <div className="max-w-fit">
          <h2 className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
            Estou sempre pronto para um bate-papo.
          </h2>

          <h2 className="mt-8 font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center">
            Entre em{" "}
            <span
              className="cursor-pointer underline decoration-wavy decoration-4 underline-offset-2 decoration-purple-500 text-gray-400 hover:text-transparent"
              style={{
                WebkitTextFillColor: "black",
                WebkitTextStroke: "3px",
              }}
              onClick={query.toggle}
            >
              contato.
            </span>
          </h2>
          {/* Precisando de um desenvolvedor? */}
          {/* <span className="text-white text-lg flex xl:justify-end justify-center text-center">
            Um estúdio criativo com foco em soluções digitais. Somos
            independentes e estamos em uma incansável busca por inovação, sempre
            mantendo os pés no chão, porém sem medo de voar.
          </span> */}
        </div>
      </div>
    </div>
  );
};

export { Html };

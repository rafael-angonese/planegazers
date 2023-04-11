import Link from "next/link";
import React from "react";

const Html: React.FC = () => {
  return (
    <div className="relative mx-2">
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
        <div className="max-w-fit ">
          <div className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center">
            <span className="block my-4">Sonhe</span>
            <span className="block my-4">Explore</span>

            <Link href="/explore">
              <span
                className="cursor-pointer underline decoration-wavy decoration-4 underline-offset-2 decoration-purple-500 text-transparent hover:text-gray-400"
                style={{
                  WebkitTextFillColor: "black",
                  WebkitTextStroke: "3px",
                }}
              >
                Descubra.
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Html };

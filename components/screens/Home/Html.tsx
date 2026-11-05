import React from "react";
import { company } from "utils/company";

const Html: React.FC = () => {
  return (
    <div className="relative mx-2">
      <div className="absolute top-[50vh] w-screen flex justify-center">
        <div className="max-w-fit">
          <h1 className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            {company.name}
          </h1>
          <span className="text-white sm:text-lg text-base flex sm:justify-end justify-center text-center">
            {company.tagline}
          </span>
        </div>
      </div>

      <div className="absolute top-[120vh] w-screen flex justify-center">
        <div className="max-w-fit">
          <h2 className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-green-500 text-center">
            Prepare-se para concretizar suas ideias criativas.
          </h2>

          <span className="text-white sm:text-2xl text-xl flex xl:justify-end justify-center text-center">
            Gostamos de criar experiências épicas divertidas e interativas com
            código.
          </span>
        </div>
      </div>

      <div className="absolute top-[200vh] w-screen flex justify-center">
        <div className="max-w-fit ">
          <div className="font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center">
            <span className="block my-4">Sonhe</span>
            <span className="block my-4">Explore</span>

            <span
              className="block my-4 underline decoration-wavy decoration-4 underline-offset-2 decoration-purple-500 text-transparent"
              style={{
                WebkitTextFillColor: "black",
                WebkitTextStroke: "3px",
              }}
            >
              Descubra.
            </span>
          </div>
        </div>
      </div>

      <footer className="absolute top-[300vh] w-screen flex justify-center px-4">
        <div className="max-w-3xl w-full text-center">
          <p className="text-gray-100 text-base font-semibold">
            {company.legalName}
          </p>
          <p className="mt-1 text-gray-300 text-sm">CNPJ {company.cnpj}</p>

          <a
            href={`mailto:${company.email}`}
            className="mt-4 inline-block text-gray-100 text-base underline decoration-purple-500 decoration-2 underline-offset-4 hover:text-purple-300"
          >
            {company.email}
          </a>

          <p className="mt-6 text-gray-400 text-sm">
            © {new Date().getFullYear()} {company.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export { Html };

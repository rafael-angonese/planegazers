import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="mt-16">
        <div className="mx-auto container max-w-6xl">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            Sobre mim.
          </h1>

          <p className="text-gray-200 mt-8 text-lg">
            Meu nome é Rafael.
            <br />
            Sou desenvolvedor full-stack com foco em front-end.
            <br />
            Vivendo em Santa Catarina, onde crio mundos com letras e números.
            <br />
          </p>

          <p className="text-gray-200 mt-8 text-lg">
            Desde que eu me lembro, o primeiro contato com a programação foi
            quando eu tinha 11 anos enquanto criava scripts de automação de um
            PokeTibia (um mundo Pokémon com as mecânicas do Tibia). Alguns anos
            depois e eu estava ingressando no curso de Ciência da Computação
            pela Universidade Comunitária da Região de Chapecó - Unochapecó.
          </p>

          <p className="text-gray-200 mt-8 text-lg">
            Passei os próximos verões dentro de casa trabalhando, estudando e
            aprendendo tudo sobre as melhores e mais emergentes tecnologias. A
            ponto de entender que existem 10 tipos de pessoas no mundo, as que
            entendem binário e as demais.
          </p>

          <p className="text-gray-200 mt-8 text-lg">
            No decorrer de alguns anos, com uma grande gama de tecnologias que
            estudei, experimentei e utilizei nos mais diversos projetos. Gerando
            uma camada horizontal recheada de competências e habilidades que me
            tornam capaz de compreender todo fluxo de desenvolvimento que vai
            desde o frontend (web e mobile), ao backend, banco de dados e
            infraestrutura. Ate que enfim, senti que chegou o momento de criar
            uma camada vertical de conhecimento, adquirindo competências mais
            profundas no que tange o frontend (que de fato virou minha paixão).
            Tornando-se assim um profissional T-Shaped interessando e aprendendo
            tudo sobre frontend.
          </p>

          <p className="text-gray-200 mt-8 text-lg">
            O que você faria se tivesse um especialista em software disponível
            ao seu alcance? Precisando de um desenvolvedor? Vamos trabalhar
            juntos!
          </p>

          <p className="text-gray-200 mt-8 text-lg">
            Diariamente gosto de cozinhar e ir pra academia treinar.
          </p>

          <p className="text-gray-200 mt-8 text-lg">Vejo moscas volantes.</p>
          <p className="text-gray-200 mt-8 text-lg">Sou canhoto.</p>
          <p className="text-gray-200 mt-8 text-lg">Sou paraquedista amador.</p>

          <p className="text-gray-200 mt-8 text-lg">Pixel-Perfect Code</p>
          <p className="text-gray-200 mt-8 text-lg">Built With Love</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="mt-16 pb-12">
        <div className="mx-auto container max-w-6xl">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            Sobre mim.
          </h1>

          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="mr-6 w-full md:w-[30%]">
              <Image
                src="/profile.jpg"
                width="680"
                height="920"
                quality={100}
                alt="Imagem de perfil"
                className="rounded-3xl"
                // placeholder="blur"
                priority
              />
            </div>

            <div className="mt-8 md:mt-0 w-full md:w-[70%]">
              <p className="text-gray-200 text-lg">
                Olá, Meu nome é Rafael.
                <br />
                Sou desenvolvedor full-stack com foco em front-end.
                <br />
                Vivendo em Santa Catarina, onde crio mundos com letras e
                números.
                <br />
              </p>

              <p className="text-gray-200 mt-8 text-lg">
                Desde que eu me lembro, o primeiro contato com a programação foi
                quando eu tinha 11 anos enquanto criava scripts de automação de
                um PokeTibia (um mundo Pokémon com as mecânicas do Tibia) sem ao
                menos saber que eu estava escrevendo códigos de programação.
                Alguns anos depois e eu estava ingressando no curso de Ciência
                da Computação pela Universidade Comunitária da Região de Chapecó
                - Unochapecó.
              </p>

              <p className="text-gray-200 mt-8 text-lg">
                Passei os próximos verões dentro de casa trabalhando, estudando
                e aprendendo tudo sobre as melhores e mais emergentes
                tecnologias.
              </p>

              <p className="text-gray-200 mt-8 text-lg">
                No decorrer de alguns anos, com uma grande gama de tecnologias
                que estudei, experimentei e utilizei nos mais diversos projetos.
                Gerando uma camada horizontal recheada de competências e
                habilidades que me tornam capaz de compreender todo fluxo de
                desenvolvimento que vai desde o frontend (web e mobile), ao
                backend, banco de dados e infraestrutura. Ate que enfim, senti
                que chegou o momento de criar uma camada vertical de
                conhecimento, adquirindo competências mais profundas no que
                tange o frontend (que de fato virou minha paixão). Tornando-se
                assim um profissional T-Shaped interessando e aprendendo tudo
                sobre frontend.
              </p>

              {/* <p className="text-gray-200 mt-8 text-lg">
            O que você faria se tivesse um especialista em software disponível
            ao seu alcance? Precisando de um desenvolvedor? Vamos trabalhar
            juntos!
          </p> */}

              <p className="text-gray-200 mt-8 text-lg">
                Enquanto não estou teclando teclas teclantes, busco ter alguns
                hobbies, diariamente eu gosto de cozinhar e ir pra academia
                treinar (você devia ir para a academia porque é muito divertido
                ser sheipado em uma profissão em que você não precisa ser
                sheipado, tipo: programador home-office).
              </p>

              <p className="text-gray-200 mt-8 text-lg">
                Sou fascinado por coisas radicais e pela natureza, em especial
                fenômenos ligados aos céus, o que me levou a virar paraquedista
                e estudar tudo que tenha ligado a atmosfera terrestre.
              </p>

              <p className="text-gray-200 mt-8 text-lg">
                Observando de outras dimensões, sou canhoto e vejo moscas
                volantes.
              </p>

              {/* <p className="text-gray-200 mt-8 text-lg">Pixel-Perfect Code</p>
          <p className="text-gray-200 mt-8 text-lg">Built With Love</p> */}
            </div>
          </div>

          <h1 className="mt-14 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Experiência.
          </h1>

          <div className="mt-12">
            <h3 className="text-gray-200 font-semibold text-xl">
              Desenvolvedor front-end
            </h3>
            <p className="text-gray-400 text-lg underline">
              <Link target="_blank" href="https://mentat.solutions">
                Mentat Solutions
              </Link>
            </p>
            <p className="text-gray-400 text-lg">set de 2021 - o momento</p>

            <p className="text-gray-400 text-lg mt-4">
              Atuar como desenvolvedor front-end, atuando em diversos projetos
              tanto para empresas de pequeno porte quanto para grandes empresas.
              <br />
              Tecnologias em destaque: Typescript, React, Next, Vue, Nuxt
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-gray-200 font-semibold text-xl">
              Facilitador tech
            </h3>
            <p className="text-gray-400 text-lg underline">
              <Link target="_blank" href="https://www.resilia.com.br">
                Resilia
              </Link>
            </p>
            <p className="text-gray-400 text-lg">
              dez de 2021 - mar de 2022 - 4 meses
            </p>

            <p className="text-gray-400 text-lg mt-4">
              Facilitar o aprendizado e desenvolvimento dos estudantes para que
              eles cheguem preparados no mercado de trabalho. Responsável por
              facilitar o conteúdo tech (já desenvolvido internamente),
              aplicando a metodologia Resilia.
              <br />
              Tecnologias em destaque: React.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-gray-200 font-semibold text-xl">
              Desenvolvedor full stack - (web e mobile)
            </h3>
            <p className="text-gray-400 text-lg underline">
              <Link target="_blank" href="https://www.televida.med.br">
                GeoLife Telemedicina (agora Televida)
              </Link>
            </p>
            <p className="text-gray-400 text-lg">
              ago de 2020 - jun de 2021 - 11 meses
            </p>

            <p className="text-gray-400 text-lg mt-4">
              Atuar como desenvolvedor Full-Stack, atuando nas demandas
              front-end (web e mobile) e back-end. Desenvolvi features como,
              chat em tempo real, upload de arquivos para o amazon s3, conversor
              de arquivos, permissões de perfil e de visualização de dados,
              otimização de querys no banco de dados, realizar deploy, entre
              outros.
              <br />
              Tecnologias em destaque: Adonisjs, Reactjs, React Native,
              Postgresql, Redis, Websocket/Socket-io, Docker, Kubernetes, Git.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-gray-200 font-semibold text-xl">
              Pesquisador científico (full stack)
            </h3>
            <p className="text-gray-400 text-lg underline">
              <Link target="_blank" href="https://www.unochapeco.edu.br">
                Unochapecó - Universidade Comunitária da Região de Chapecó -
                Estágio
              </Link>
            </p>
            <p className="text-gray-400 text-lg">
              ago de 2019 - mar de 2021 - 1 ano 8 meses
            </p>

            <p className="text-gray-400 text-lg mt-4">
              Atuar no projeto de Pesquisa de Iniciação Científica, constitui no
              desenvolvimento de uma aplicação mobile e web para auxiliar nas
              atividades da empresa. Desenvolvi todo o projeto do zero,
              implementando funcionalidades como notificações por push, envio de
              email, agenda, permissões de perfil, entre outros.
              <br />
              Tecnologias em destaque: Adonisjs, Reactjs, React Native,
              Postgresql, Git.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-gray-200 font-semibold text-xl">
              Desenvolvedor web (full stack)
            </h3>
            <p className="text-gray-400 text-lg underline">
              <Link target="_blank" href="https://dotse.com.br">
                DotSE - Software Engineering
              </Link>
            </p>
            <p className="text-gray-400 text-lg">
              set de 2019 - jul de 2020 - 11 meses
            </p>

            <p className="text-gray-400 text-lg mt-4">
              Responsável no desenvolvimento e manutenção de sistemas web.
              Desenvolvi integrações com sistemas financeiros como emissão de
              NFSE, conciliação bancária, meios de pagamento, bem como features
              de videoconferência, envio de email, entre outros.
              <br />
              Tecnologias em destaque: Laravel, JQuery, JavaScript(Vanilla),
              Postgresql, Redis, HTML, CSS, Bootstrap, Git.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-gray-200 font-semibold text-xl">
              Estagiário de desenvolvimento web (full stack)
            </h3>
            <p className="text-gray-400 text-lg underline">
              <Link target="_blank" href="https://www.agrosimulador.com.br">
                AgroSimulador
              </Link>
            </p>
            <p className="text-gray-400 text-lg">
              mar de 2019 - set de 2019 - 7 meses
            </p>

            <p className="text-gray-400 text-lg mt-4">
              Responsável por auxiliar no desenvolvimento de sistema web quanto
              na análise de documentação técnica em português e inglês.
              Compreendi os fundamentos do desenvolvimento web, bem como entendi
              o ambiente de desenvolvimento de um sistema real.
              <br />
              Tecnologias em destaque: Laravel, Mysql, AngularJS, HTML, CSS,
              Bootstrap, Git.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

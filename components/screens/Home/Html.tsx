function Html() {
  return (
    <>
      <div className="absolute top-[50vh] left-[50vw] -translate-x-2/4 w-[100vw] flex justify-center">
        <div className="max-w-fit">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Rafael Angonese
          </h1>
          <span className="text-white flex justify-end">
            Criando mundos com letras e números.
          </span>
        </div>
      </div>

      <div className="absolute top-[140vh] left-[50vw] -translate-x-2/4 w-[100vw] flex justify-center">
        <div className="max-w-fit">
          <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Prepare-se para concretizar as suas ideias criativas
            {/* Prepare-se para transformar suas ideias criativas em realidade */}
          </h2>

          <span className="text-white flex justify-end">
            Criamos experiências interativas épicas em tempo real para
            impressionar as pessoas.
          </span>
        </div>
      </div>

      {/* <h1
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#292828",
        }}
      >
        hello.
      </h1> */}
      {/* <h1
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-65%)",
          color: "#f4b677",
        }}
      >
        Your Future
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "250vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#673ab7",
        }}
      >
        Awaits
      </h1> */}
    </>
  );
}

export { Html };

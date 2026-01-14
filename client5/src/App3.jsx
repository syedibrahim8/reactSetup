import React from "react";

const App = () =>{
  return(
    <>
    <header className="flex-col text-center">
      <div className="bg-gray-950 text-white">
        <h1 className="pt-4 text-3xl">Syed Ibrahim Ali</h1>
        <h2 className="pb-4">Full Stack Developer</h2>
      </div>
      <nav className="flex justify-around bg-gray-900 text-white">
        <ul className="flex p-2 gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </nav>
    </header>
    <section>
    <div className="h-dvh bg-gray-950 text-white">
      <p>Iam a Full Stack Web developer specialized in MERN stack</p>
    </div>
    </section>
    </>
  )
}

export default App
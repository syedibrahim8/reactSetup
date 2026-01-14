import React from "react";

const App=()=>{
  return(
    <>
    <h1 className="text-5xl m-10 underline text-center">My photo</h1>
    <div className="bg-cyan-950 p-5">
      <img className="h-100 w-100 rounded-full object-cover mx-auto blur-sm border-4 black" src="pagani.jpg" alt="" />
    </div>
    
    </>
  )
}

export default App;
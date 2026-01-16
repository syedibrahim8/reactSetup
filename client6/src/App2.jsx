import {useState} from "react";

const App = () =>{
  const fullName = "Ibrahim";
  const [age,setAge] = useState(15);
  const [hobbies,setHobbies] = useState(["Gym","Coding"]);
  function updateAge (){
    if (age==25){
      return;
    }
    setAge(age+1)
  }
  function decAge(){
    if(age==0){
      return;
    }
    setAge(age-1)
  }
  return(
    <>
    <h1>My Details</h1>
    <p>Full Name:{fullName}</p>
    <p>Age:{age}</p>
    <p>Status: {age>18?"Adult":"Minor"}</p>
    <div className="flex">
      <p>Hobbies:</p>
      <div>
        {
      hobbies.map((x,index)=>(
        <p key={index}>{x}</p>
      ))
    }
      </div>
      
    </div>
    
    {age == 22 && <p>Happy birthday zobbi</p>}
    <button 
    onClick={updateAge}
    className="bg-blue-500 text-white text-center p-2 m-2 rounded-xl cursor-pointer">Increase age</button>
    <button 
    onClick={decAge}
    className="bg-blue-500 text-white text-center p-2 m-2 rounded-xl cursor-pointer">decrease age</button>
    </>
  )
}

export default App;
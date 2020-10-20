import React, {useState} from "react"; 
import Tweet from "./Tweet";

function App(){

 const [users, setUsers] = useState([
   { name: "Amrit", message: "This Is Amrit" },
   { name: "Yukta", message: "This Is Boss" },
   { name: "Sushant", message: "This Is Guffadi" }
 ]);
 
  return(
    <div className="App">
     {users.map(user => (
         <Tweet name={user.name} message={user.message} />
         )
       )
     }
     
    </div>
  );
}

export default App;
 
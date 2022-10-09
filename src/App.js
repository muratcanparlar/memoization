import './App.css';
import { useMemo, useState } from 'react';
import Header from './components/Header'
import UserInfo from './components/UserInfo';

function App() {
const[text,setText]=useState('')

  // const user=useMemo(()=>{
  //   return {
  //     username:"Murat Can",
  //     email:"canparlar@hotmail.com",
  //     title:"Senior Developer"
  //   }
  // },[]);
  let user=useMemo(()=>{return calculation();},[])
  const[number,setNumber]=useState(0)
  return (
    <div className="App">
      <Header number={number< 5 ? 0 : number}/>
      <UserInfo data={user}/>
      <h2>{number}</h2>
      <div>
          <button onClick={()=>setNumber(number+1)}>Increase Number</button>
      </div>
      <div>
        <input value={text} onChange={({target})=>setText(target.value)} />
      </div>
    </div>
  );
}
function calculation(){
  console.log("calculating....")
  for( let i=0; i<100000; i++){

  }
  console.log("calculating completed.")
  return {
    username:"Murat Can",
    email:"canparlar@hotmail.com",
    title:"Senior Developer"
  }
}
export default App;

import {useState} from 'react';
import Table from './table';

function App() {
 const [val, setName] = useState('');
 const [password, setPassword] = useState('');
 const [name, setName1] = useState('');
  return (
    // <div>
    //  { <form>
    //     <h1>Filling of the form</h1>
    //      <input type="text" onChange={(event)=> setName(event.target.value)} placeholder='Name'/>

         
    //      <br />
    //       <input type="password" onChange={(event)=> setPassword(event.target.value)}  placeholder='password'/>
    //       <br />
     
    //   <input type="name"  onChange={(event)=>setName1(event.target.value)} placeholder='Name'/>
    //   <br />

    //   <button>Submit</button>

    //   <button onClick={()=>setVal('')}>Clear Form </button>
      
    //   <h1>{val}</h1>
    //   <h1>{password}</h1>
    //   <h1>{name}</h1>
     
     
    //   </form> }
       
    // </div>

    <div>
     <Table></Table>
    </div>
  );
}
export default App;

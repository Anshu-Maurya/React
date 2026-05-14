import { useState } from 'react';

function Skill() {
   const [gender,setGender] = useState('female');
   const[city,setCity] = useState('varanasi');
 
  return (
    <div>
      <h1>Enter you Skills</h1>
      <input type="radio"  name ='gender' id='male' onChange={(event)=>setGender(event.target.value)}  value={'male'} checked={gender=='male'}/>
      <label htmlFor="male">Male</label>
      <br />
      <input type="radio" name='gender' id='female' onChange={(event)=>setGender(event.target.value)}  value={'female'} checked={gender =='female'}/>
      <label htmlFor="female">Female</label>
      <br />
      <h3>Selected Gender: {gender}</h3>
      <h2>Select City</h2>
      <select defaultValue={"3"} onChange={(event)=>setCity(event.target.value)}>
        <option value="noida">Noida</option>
        <option value="varansi">varansi</option>
        <option value="kanpur">kanpur</option>
        <option value="Ahraura">Aharaura</option>

      </select>
      <h2>selected city :{city}</h2>
     

    </div>
  );
}

export default Skill;

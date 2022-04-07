
import { useState } from 'react';
import './App.css';
import List from "./component/list.js";
import data from "./data/data";

function App() {
  const [people, setPeople] = useState(data); //making list on "list"
  

  return (
    <main className="App">
     <section className='container'>
       <h3>{people.length}  birthday today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([]) }>
          clear all
        </button>
     </section>
     

    </main>
  );
}

export default App;

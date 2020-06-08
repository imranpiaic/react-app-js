import React from 'react';
import Dinner from './Dinner';

function App() {
  return (
<div><h1>Hello world</h1>
  <Dinner sessionName="Bootcamp 2020" studentName="Imran" courseName="Cloud Native Computing"
  topicName="kubernetes" teachersName="Sir Mohsin Khalid, Sir Aamir Aziz, Sir Bashir Aziz, Sir Ameen Alam"/>
<hr/>
<Dinner sessionName="Bootcamp 2020" studentName="Ali" courseName="Internet Of Things"
topicName="Rust" teachersName="Sir Zia khan, Sir Imran, Sir Shahrukh, Sir Fahim uz Zaman"/>
<hr/>
<Dinner sessionName="Bootcamp 2020" studentName="Abudllah" courseName="Artificial Intelligence"
  topicName="Narrow Artificial Intelligence" teachersName="Sir Nasir, Sir Qasim, Sir Adil Altaf, Sir Daniyal"/>

</div>
  );
}

export default App;

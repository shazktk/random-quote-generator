import './App.css';
import Button from './Components/Button';
import { useState, useEffect } from 'react';

function App() {
// const [quotesData, getQuotesData] = useState({
//   quotes: [],
//   selectedQuoteIndex: null
// })
  const [quotesData, getQuotesData] = useState([])

 
useEffect(
  fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then(data=> data.json())
  .then(data=> console.log(data))
  .then(quotes=> getQuotesData(quotes))
,[])


  function nextQuoteClickHandler() 
  {
    console.log('Hi');
  }
  console.log(quotesData)
  return (
    <div className="App" id="quote-box">
      {/* <Button buttonDisplayName="Next Quote" clickHandler={nextQuoteClickHandler}/> */}
      <p>${quotesData}</p>
    </div>
  );
}

export default App;

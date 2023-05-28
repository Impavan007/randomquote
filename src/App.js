
import './App.scss';
import color_Array from './color';
import React, { useEffect, useState } from 'react';
const quoteDbUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"


function App() {
const [quote,setQuote] =useState("Life isn’t about getting and having, it’s about giving and being.");
const [author, setAuthor] = useState("Kevin Kruse");
const [randomNumber, setRandomNumber] = useState(0);
const [quotesArray, setQuotesArray] = useState(null);
const [accentColor, setAccentColor] = useState("#282c34")

const fetchQuotes=async(url)=>{
  const response=await fetch(url)
  const parsedJSON=await response.json()
  setQuotesArray(parsedJSON.quotes)
  console.log(parsedJSON)
}

useEffect(() => {

  fetchQuotes(quoteDbUrl)
}, [quoteDbUrl])


const getRandomQuote=()=>{
  let randomInteger = Math.floor(Math.random() * color_Array.length);
  setRandomNumber(randomInteger)
  setQuote(quotesArray[randomInteger].quote)
  setAuthor(quotesArray[randomInteger].author)
  setAccentColor(color_Array[randomInteger])
}



  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor}}>
        <div id="quote-box" style={{color:accentColor}}>

       
        <h2 id="text">"{quote}"</h2>
        <p id="author">  -{author}</p>
        <button onClick={()=>getRandomQuote()} id="new-quote" style={{backgroundColor:accentColor}}>New Quote</button>
        <a id="tweet-quote" href={encodeURI("http://www.twitter.com/intent/tweet?text=${quote} ${author}")}><button className="btn" style={{backgroundColor:accentColor}}>tweeter</button></a>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;

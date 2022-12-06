import './App.css';
import Board from './components/board/Board';
import Keyboard from './components/keyboard/Keyboard';
import {useState} from 'react'
import WordContainer from './components/wordContainer/WordContainer';
function App() {

  const [guessedLetters, setGuessedLetters] = useState({});
  const [wrongGuesses, setWrongGuesses] = useState(new Set());

  const setSeen = (newSeen) => {
    setGuessedLetters(newSeen);
  }
  const updateWrongGuesses = (letter) => {
    const newWrongGuesses = new Set(wrongGuesses);
    newWrongGuesses.add(letter)
    setWrongGuesses(newWrongGuesses);

  }
  console.log(typeof setSeen);
  const word = 'Harry Potter'.toLowerCase();
  return (
    <div className="App">
      <Board wrongGuesses={wrongGuesses}/>
      <WordContainer key='word-container-1' word={word} seen={guessedLetters}/>
      <Keyboard word={word} seen={guessedLetters} setSeen={setSeen} setWrongGuesses={setWrongGuesses} updateWrongGuesses={updateWrongGuesses}/>
    </div>
  );
}

export default App;

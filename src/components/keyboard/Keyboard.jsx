import './keyboard.css'
import Key from '../key/Key'
const Keyboard = ({word, seen, setSeen, wrongGuesses, updateWrongGuesses}) => {

    console.log(typeof setSeen);
    const keys = [];
    for(let i = 0; i < 26; ++i){
        keys.push(String.fromCharCode('A'.charCodeAt() + i));
    }
    const mappedKeys = keys.map((key, idx) => <Key key={`key-${idx}`} wrongGuesses={wrongGuesses} word={word} letter={key} seen={seen} setSeen={setSeen} updateWrongGuesses={updateWrongGuesses}></Key>)
    const topKeys = mappedKeys.slice(0, 9);
    const middleKeys = mappedKeys.slice(9, 18);
    const bottomKeys = mappedKeys.slice(18, 26);
    return (
        <div className="Keyboard">
            <div className="keyboard-top-row">{topKeys}</div>
            <div className="keyboard-middle-row">{middleKeys}</div>
            <div className="keyboard-bottom-row">{bottomKeys}</div>
        </div>
    );
}
 
export default Keyboard;
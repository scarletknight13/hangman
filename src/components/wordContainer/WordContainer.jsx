import LetterTile from "../letterTile/LetterTile";
import './wordcontainer.css'
const WordContainer = ({word, seen}) => {

    console.log('wordcontainer', seen);
    const mappedLetters = []
    for (let i = 0; i < word.length; ++i){
        mappedLetters.push(<LetterTile key={`letter-${i}`} letter={word[i]} seen={seen}/>)
    }
    return (
        <div className="WordContainer">{mappedLetters}</div>
    );
}
 
export default WordContainer;
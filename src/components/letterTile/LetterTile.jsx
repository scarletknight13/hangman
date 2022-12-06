import './lettertile.css'

const LetterTile = ({letter, seen}) => {
    return (
        <p className={'LetterTile' + (letter !== ' ' ? ' underlined' : '')}>{seen[letter] ? letter : ''}</p>
    );
}
 
export default LetterTile;
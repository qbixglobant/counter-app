import characters from '../data/characters';

export const getCharacterById = (id) => {
    return characters.find( (character) => character.id === id );
};

export const getCharactersByStudio = ( studio ) => {
    const result = characters.filter( (character) => character.studio === studio );
    return (result.length > 0) ? result : null;
};

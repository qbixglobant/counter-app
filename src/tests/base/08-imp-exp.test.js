import { getCharacterById, getCharactersByStudio } from "../../base/08-imp-exp";
import characters from "../../data/characters";

describe('Tests on 08-imp-exp.js', () => {
    test('should match with the given object', () => {
        const character = getCharacterById(1);
        expect(character).toEqual({
            id: 1,
            name: 'Goku',
            studio: 'Toei'
        });
    });

    test('should match id with the given object', () => {
        const id = 1;
        const character = getCharacterById( id );
        const characterData = characters.find( c => c.id === id );
        expect( character ).toEqual( characterData );
    });

    test('should return undefined if character does not exist', () => {
        const id = 100;
        const character = getCharacterById( id );
        expect( character ).toBe( undefined );
    });

    test('should return characters array from Toei Studio', () => {
        const studio = "Toei";
        const charactersTest = getCharactersByStudio( studio );
        const charactersData = characters.filter(c => c.studio === studio)
        expect( charactersTest ).toEqual( charactersData );
    });

    test('should return characters array from Deen Studio', () => {
        const studio = "Deen";

        const charactersTest = getCharactersByStudio( studio );

        expect( charactersTest.length ).toBe( 3 );
    });

    test('should return empty array from unknown studio', () => {
        const studio = "Aniplex";
        const charactersTest = getCharactersByStudio( studio );
        expect( charactersTest ).toBe( null );
    });
});

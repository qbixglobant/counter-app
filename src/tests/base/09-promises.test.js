import getCharacterByIdAsync from "../../base/09-promises";
import characters from "../../data/characters";

describe('Test on 09-promises.js', () => {
    test('should return a character async', ( done ) => {
        const id = 1;
        getCharacterByIdAsync( id )
            .then( character => {
                expect( character ).toBe( characters[0] );
                done();
            });
    });

    test('should throw an error if character does not exist', ( done ) => {
        const id = 100;
        getCharacterByIdAsync( id )
            .catch( error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect( error ).toBe(`Could not find character with the following id: "${id}"`);
                done();
            });
    });
});

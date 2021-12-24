import { returnArray, usState } from "../../base/07-deses-arr";

describe('Tests on 07-deses-arr.js', () => {
    test('should destructure correctly', () => {
        const result = returnArray();
        const [ characters, numbers ] = result;
        expect( result ).toEqual([ 'ABC', 123 ]);
        expect( characters ).toEqual( 'ABC' );
        expect( typeof characters ).toEqual( 'string' );
        expect( numbers ).toEqual( 123 );
        expect( typeof numbers ).toEqual( 'number' );
    });

    test('Should return a given value and an string', () => {
        const testValue = "Test";
        const [ value, testFunction ] = usState(testValue);
        expect( typeof value ).toBe( 'string' );
        expect( value ).toBe( testValue );
        expect( typeof testFunction ).toBe( 'function' );
        expect( typeof testFunction() ).toBe( 'string' );
        expect( testFunction() ).toBe( 'Lorem Ipsum' );
    });
});

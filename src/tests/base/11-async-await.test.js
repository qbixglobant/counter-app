import getImage from "../../base/11-async-await";

describe('Tests on 11-async-await.ts', () => {
    test('should return image url', async () => {
        const url = await getImage('iGe4xB2YJhkdbjEBfOUqBMEXzhVeDHxJ');
        expect( url.includes("https://") ).toBe( true );
    });

    test('should return an error with given wrong apiKey', async () => {
        const url = await getImage('123456789');
        expect( url ).toBe( 'Does not exist!' );
    });
});

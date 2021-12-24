describe('Demo Test', () => {
    test('Should be true', () => {
        // Arrange
        const isActive = true;

        // Assert
        if (!isActive) {
            throw new Error("It is not active");
        }
    });

    test('Should match both strings', () => {
        const message1 = 'Hello World';
        const message2 = `Hello World`;

        expect( message1 ).toBe( message2 );
    });
});

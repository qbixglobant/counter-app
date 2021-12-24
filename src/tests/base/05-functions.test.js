import { getUser, getActiveUser } from "../../base/05-functions";

describe('Tests on 05-functions.js', () => {
    test('should return an object', () => {
        const userTest = {
            uid: 'abc123',
            username: 'gilgamesh'
        };
        const user = getUser();
        expect( user ).toEqual( userTest );
    });

    test('should return an object with given user', () => {
        const name = "John";
        const user = getActiveUser(name);
        expect( user ).toEqual({
            uid: 'ABC123',
            username: name
        });
    });
});

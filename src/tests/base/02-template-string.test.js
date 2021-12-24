import { getFullName, getGreeting } from "../../base/02-template-string";

describe('Test on 02-template.string.js', () => {

    test('should return full name', () => {
        const firstName = "John";
        const lastName = "Doe";
        const answer = getFullName(firstName, lastName);
        expect(answer).toBe(`${firstName} ${lastName}`);
    });

    test('should return a greeting', () => {
        const name = "Daniel";
        const greeting = getGreeting(name);
        expect(greeting).toBe(`Hello ${name}!`);
    });

    test('should return Hello John Doe! by default', () => {
        const name = "John Doe";
        expect(getGreeting()).toBe(`Hello ${name}!`);
    });

});

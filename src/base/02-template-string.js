export const getFullName = (firstName, lastName) => {
    return `${ firstName } ${ lastName }`;
}

export const getGreeting = (name = "John Doe") => {
    return `Hello ${name}!`;
};

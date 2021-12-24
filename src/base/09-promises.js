import { getCharacterById } from "./08-imp-exp";

const getCharacterByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getCharacterById( id );

            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( `Could not find character with the following id: "${id}"` );
            }

        }, 100 );

    });

}

export default getCharacterByIdAsync;
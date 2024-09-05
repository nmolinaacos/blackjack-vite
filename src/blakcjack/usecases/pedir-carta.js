/**
 * 
 * @param {Array<String>} deck 
 * @returns  {Array<String>} retorna el ulimo valor del array y la elimina para no volver a ser usada en el mismo juego.
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


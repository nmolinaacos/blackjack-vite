import _ from './../../pluggins/underscore.plugin.js'
/**
 * 
 * @param {Array<String>} tipos 
 * @param {Array<String>} especiales 
 * @returns {Array<String>} Returna un nuevo array ordenado aleatoriamente.
 */

export const crearDeck = ( tipos, especiales) => {

    if (!tipos ){
        throw new Error('Los tipos de cartas son obligatorios');
    };

    let deck         = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
};
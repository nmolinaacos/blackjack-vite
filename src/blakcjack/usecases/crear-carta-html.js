/**
 * 
 * @param {String} carta 
 * @returns {HTMLElment} imagen de carta
 */

export const crearCarta = ( carta ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
};
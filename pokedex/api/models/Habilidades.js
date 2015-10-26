/**
 * Habilidades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            required: true
        },

        tipoDano: {
            type: 'string',
            defaultsTo: 'Normal'
        },

        idPokemon: {
            model: 'pokemon'
        }


    }
};
/**
 * PokemonController
 *
 * @description :: Server-side logic for managing pokemons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    hola: function (req, res) {
        return res.send("Hola desde el controlador pokemon");

    },
    
    adios: function (req, res) {
        return res.send("Adios desde el controlado");

    }
};
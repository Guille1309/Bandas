let bandas = require("../db/index")
bandas = bandas.lista

const bandasController = {
    listadoBandas: function (req, res) {
        res.render("index", { bandas: bandas })
    },
    detalleBanda: function (req, res) {
        let idRecibido = req.params.id;
        let bandaId;
        for (let i = 0; i < bandas.length; i++) {
            let idBanda = bandas[i].id;
            if (idRecibido == idBanda){
                bandaId = bandas[i];
            }
        };
        res.render('detalleBanda', {bandaId: bandaId})                   
    },
    generoBanda: function (req, res) {
        let idGenero = req.params.id;
        let generos = [];
        for (let i = 0; i < bandas.length; i++) {
            if (idGenero == bandas[i].genero){
                generos.push(bandas[i]);
            }
            else {
                continue
            }
        };
        
        res.render('porGenero', {generos})
}
}

module.exports = bandasController
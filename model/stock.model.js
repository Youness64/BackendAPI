const dataBase = require('../bd/db-connection');



const stockConstructor = function (stock) {
    this.diametre = stock.diametre;
    this.taille = stock.taille;
    this.nom = stock.nom;
    this.type = stock.type;
};




        find = result_bdd_request => {
            dataBase.query('SELECT * FROM article ', (error, response) => {
                if (error) {
                    result_bdd_request(error);
                }
                // Le premier null représente les erreurs
                result_bdd_request(null, response);
            });
        };
            

module.exports = {  
                    find,
                    stockConstructor,
};
const stockModel = require('../model/stock.model')

getStock = (request, response) => {
    stockModel.find((error, data) => {
        if (error)
            response.status(500).send({
                message:
                    error.message || "Une erreur est survenue en essayant de récupérer la table stock."
            });
        else response.send(data);
    })
};

module.exports = {getStock};

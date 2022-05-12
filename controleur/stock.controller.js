const stockModel = require('../model/stock.model')

getStock = async (req, res, next) => {
    let stockList = await stockModel.find();
    res.send(stockList);
};

module.export = getStock;

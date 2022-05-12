const query = require('../bd/db-connection');


        tableName ='api';


        find = async(params ={}) => {
            let sql = 'SHOW TABLES FROM api';

            if(!Object.keys(params).length){
                return await query(sql);
            }
        }

module.export = find;
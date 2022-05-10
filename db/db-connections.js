const mongoose = require('mongoose');
const { CP1250_BIN } = require('mysql/lib/protocol/constants/charsets');


mongoose.connect('mongodb+srv://root:<password>@cluster0.kd7zw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    {
        useNewUrlParser : true,
        useUnifiedTopology: true
    }
.then(() => console.log('Connexion a MongoDB réussie !'))
.catch(() => console.log('Connexion a MongoDB échouée !'))
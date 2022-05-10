const mongoose = require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect('mongodb+srv://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@cursonodejsdicasparadev.ynwff.mongodb.net/database?retryWrites=true&w=majority',
    (error) => {
        if(error){
            console.log("Ocorreu um erro ao se conectar com a base de dados: " + error);
        }else{
            console.log("Conexão realizada a base de dados com sucesso");
        }
    });
}

module.exports = connectToDataBase;
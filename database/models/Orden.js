module.exports = function(sequelize, dataTypes){
    let alias = 'Orden';
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        plan_id: {
            type: dataTypes.INTEGER
        }
    }
    
    let config = {
        tableName: "ordenes",
        timestamps: false
    }

    let Orden = sequelize.define(alias, cols, config);

    

    return Orden;
}
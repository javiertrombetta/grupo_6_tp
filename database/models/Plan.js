module.exports = function(sequelize, dataTypes){
    let alias = 'Plan';
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_plan: {
            type: dataTypes.STRING
        },
        velocidad_descarga: {
            type: dataTypes.STRING
        },
        velocidad_subida: {
            type: dataTypes.STRING
        },
        atencion_cliente: {
            type: dataTypes.STRING
        },
        wifi: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.TEXT
        }
    }
    
    let config = {
        tableName: "planes",
        timestamps: false
    }

    let Plan = sequelize.define(alias, cols, config);

    Plan.associate = function(models){
        Plan.hasMany(models.Orden, {
            as: "ordenes",
            foreignKey: "plan_id"
        });
    }

    return Plan;
}
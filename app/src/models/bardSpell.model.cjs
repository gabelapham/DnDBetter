module.exports = (sequelize, DataTypes) => {

    const Spell = sequelize.define("bardSpell", {
        level:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        spell_name:{
            type: DataTypes.TEXT,
            allowNull: false

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        school: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        casting_time: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        range : {
            type: DataTypes.TEXT,
            allowNull: false

        },
        duration: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        component: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })

    return Spell
}
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    });
  
    Employee.associate = (models) => {
      //2 elementos separados por individuo
      //Employee.hasOne(models.Address,
      //2 elementos separados por endereços
      Employee.hasMany(models.Address,
        { foreignKey: 'employeeId', as: 'addresses' });
    };
  
    return Employee;
  };
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
    type: DataTypes.STRING,
    unique:true,
    allowNull:false
   },
    email: {
    type: DataTypes.STRING,
    unique:true,
    allowNull:false,
    validate :{
      isEmail:true
    }
   },
    password: {
    type:DataTypes.STRING,
    unique:true,
    allowNull:false,
   },
   createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
   updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }

  });

  User.associate = function(models) {
     User.hasMany(models.Bucketlist, {
      onDelete: "cascade"
    });
  };

  User.sync();
  
  return User;
};

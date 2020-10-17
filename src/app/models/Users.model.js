module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
      FBID: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobileNo: {
        type: Sequelize.STRING
      },
      profileCompleted: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };
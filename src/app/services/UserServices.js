const db = require("../models");
const request = require('request');
const User = db.user;
const Op = db.Sequelize.Op;


// services

class UserServices {
  /**
   * @description Create an instance of PostService
   */
  constructor () {
    // Create instance of Data Access layer using our desired model
  }

  /**
   * @description Attempt to create a user with the provided object
   * @param UserToCreate {object} Object containing all required fields to
   * create user
   * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
   */
  async create ( UserToCreate ) {
    try {
            const user = {
                FBID: UserToCreate.id,
                name: UserToCreate.name,
                email: UserToCreate.email,
                profileCompleted: false
              };

              const result = User
              .findOne({ where: {FBID: UserToCreate.id} })
              .then(function(obj) {
                  // update
                  if(obj)
                      return User.update(user.email,user.name);
                  // insert
                  return User.create(user);
              })

              // const result = User
              // .findOrCreate({where: {FBID: UserToCreate.id}, defaults: {}})
              // .spread(function(user, created) {
              //   console.log(user.get({
              //     plain: true
              //   }))
              //   console.log(created)
            
              // })
       // const result =  User.create(user);
      return { success: true, body: result };
    } catch ( err ) {
      return { success: false, error: err };
    }
  }
}

module.exports =  UserServices;
require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../../lib/model/User');

describe('User unit tests', () => {
  
  it('create a user model', () => {
    const user = new User ({
      username: 'username',
      profilePic: 'string',
    });
    expect(user.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      username: 'username',
      profilePic: 'string',
    });
  });

});

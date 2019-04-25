require('dotenv').config();
const { tokenize, untokenize } = require('../../lib/utils/token');
const jwt = require('jsonwebtoken');

describe('JWT token', () => {
  it('can create a token', () => {
    const token = tokenize({
      username: 'username',
      _id: '123'
    });
    expect(token).toEqual(expect.any(String));
  });
    
});

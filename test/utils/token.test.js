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

  it('can untokenize a token', () => {
    const token = tokenize({
      username: 'username',
      photourl: 'here'
    });
    const obj = untokenize(token);

    expect(obj).toEqual({
      username: 'username',
      photourl: 'here'
    });
  });

  it('can untokenize a fake token', () => {
    expect(() => untokenize('12345')).toThrow('Bad token');
  });
    
});

const { hash, compare } = require('../../lib/utils/hash');

describe('hashing passwords', () => {
  it('uses bcrypt to hash a password', () => {
    const password = 'hello';

    return hash(password)
      .then(hash => {
        expect(hash).toEqual(expect.any(String));
        expect(hash).not.toEqual(password);
      });
  });
})
;

const { assert } = require('chai');

const UsersList = require('../src/users');

describe('UsersList', () => {

  describe('constructor', () => {

    it('should construct a UsersList object', () => {
      const usersList = new UsersList('csv', './data/users.csv');

      assert.equal(usersList.sourceType, 'csv');
      assert.equal(usersList.sourcePath, './data/users.csv');
    });
  });

  describe('getUserList', () => {
    it('should get a users list', async () => {
      const usersList = new UsersList('csv', './data/users.csv');

      const users = await usersList.getUsers()

      assert.lengthOf(users, 2);
      users.forEach((user) => {
        assert.property(user, 'first_name');
        assert.property(user, 'last_name');
        assert.property(user, 'email');
      });
    });
  });
});

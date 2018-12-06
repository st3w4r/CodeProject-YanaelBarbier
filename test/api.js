const { assert } = require('chai');

const ChangeApi = require('../src/api');

describe('ChangeApi', () => {

  describe('constructor', () => {

    it('should return a ChangeApi object', () => {
      const changeApi = new ChangeApi();

      assert.equal(changeApi.host, 'https://www.change.org');
    });

    it('should sign a petition', async () => {
      const changeApi = new ChangeApi();

      const petitionId = 13954429;
      const firstName = 'Yana';
      const lastName = 'Bar';
      const email = 'yana@bar.com';

      try {
        const res = await changeApi.signPetition(petitionId, firstName, lastName, email);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    });
  });
});

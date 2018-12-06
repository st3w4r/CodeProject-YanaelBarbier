const axios = require('axios');

// Provide functions to interact with the Change API

// ToDo functions:
// - batchSignPetition: Send a batch of signatues
// - streamSign: Send each sign through a stream

class ChangeApi {
  constructor(changeToken, changeCookie) {
    this.host = 'https://www.change.org';
    this.headers = {
      'content-type': 'application/json',
      'x-csrf-token': changeToken || null,
      'cookie': changeCookie || null,
    };
  }

  async signPetition(petitionId, firstName, lastName, email) {
    const payload = {
      petition_id: petitionId || null,
      first_name: firstName || null,
      last_name: lastName || null,
      email: email || null,
    };

    const options = {
      method: 'post',
      url: `${this.host}/api-proxy/-/signatures`,
      data: payload,
      headers: this.headers,
    };

    try {
      const response = await axios(options);
      return response;
    } catch (e) {
      console.error(`Error to sign the petition: ${e}`);
      return null;
    }
  }
}

module.exports = ChangeApi;

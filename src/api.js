const axios = require('axios');

class ChangeApi {
  constructor() {
    this.host = 'https://www.change.org';
    this.headers = {
      'content-type': 'application/json',
      'x-csrf-token': process.env.CHANGE_TOKEN || null,
      'cookie': process.env.CHANGE_COOKIE || null,
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

    const response = await axios(options);
    return response;
  }
}

module.exports = ChangeApi;

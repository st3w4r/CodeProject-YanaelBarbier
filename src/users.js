const csv = require('csvtojson');

// Abstract the retrive of users
// Provide functinos to get an array of users

class UsersList {

  constructor(sourceType, sourcePath) {
    this.sourceType = sourceType || null;
    this.sourcePath = sourcePath || null;
    this.users = [];
  }

  // ToDo:
  // - readFromJSON
  // - readFromDB
  // - generateUser

  async readFromCsv(filename) {
    const json = await csv({
      delimiter: ';',
    }).fromFile(filename);
    return json;
  }

  async getUsers() {
    if (this.sourceType === null || this.sourcePath === null) {
      console.log('Set a source type and a source path.');
    }

    switch (this.sourceType) {
      case 'csv':
        try {
          this.users = await this.readFromCsv(this.sourcePath);
        } catch (e) {
          console.error(`An error occurred on the csv reading: ${e}`);
        }
        break;
      default:
        console.log('Chose a source type: csv, etc..');
    }

    return this.users;
  }
}

module.exports = UsersList;

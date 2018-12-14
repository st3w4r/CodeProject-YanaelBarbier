const Scrapper = require('./scrapper');
const UsersList = require('./users');

const usersList = new UsersList('csv', './data/users.csv');

const start = async () => {
  const users = await usersList.getUsers();

  users.forEach(async (user) => {
    try {
      const scrapper = new Scrapper();
      const response = await scrapper.signPetition(
        user.first_name,
        user.last_name,
        user.email)
      if (response) {
        console.log(response);
      }
    } catch (e) {
      console.error(e);
    }
  });
};

module.exports = start;

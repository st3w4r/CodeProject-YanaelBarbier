const Scrapper = require('./scrapper');
const UsersList = require('./users');

const usersList = new UsersList('csv', './data/users.csv');

const start = async () => {
  const users = await usersList.getUsers();
  const scrapper = new Scrapper();

  let p = Promise.resolve();

  users.forEach(async (user) => {
    p = p.then(async () => {
      try {
        const response = await scrapper.signPetition(
          user.first_name,
          user.last_name,
          user.email)
        if (response) {
          console.log(response);
          console.log(user);
        }
      } catch (e) {
        console.error(e);
      }
    });
  });
  return p;
};

module.exports = start;

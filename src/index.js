const ChangeApi = require('./api');
const UsersList = require('./users');

const PETITION_ID = process.env.PETITION_ID;

const changeApi = new ChangeApi(
  process.env.CHANGE_TOKEN,
  process.env.CHANGE_COOKIE,
);

const usersList = new UsersList('csv', './data/users.csv');

const start = async () => {
  const users = await usersList.getUsers();

  users.forEach(async (user) => {
    const response = await changeApi.signPetition(PETITION_ID,
      user.first_name,
      user.last_name,
      user.email);
    if (response) {
      console.log(response);
    }
  });
};

module.exports = start;

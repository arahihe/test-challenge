// Imports small array of users
// Pretend it's an API request
const users = require("./data.js").default;

// Fetches all users
// const getUsers = () => {
  // return users;
// };

// Filters users by specific ID
// const getUser = (id) => {
  // return users.find((user) => user.id === id);
// };

// test
// console.log(getUser(3));

// module.exports = { getUsers, getUser };

function getUsersById(id) {
  return users.find(user => user.id === id) || null;
}
function getUsersByUsername(username) {
  return users.find(user => user.username === username) || null;
}

module.exports = {
  getUsersById,
  getUsersByUsername
};
const { getRandomUserApi } = require("../api");

const getRandomUser = (text) => {
  if (text !== "male" && text !== "female") return;

  let config = {
    gender: text,
  };

  return new Promise((resolve, reject) => {
    getRandomUserApi(config)
      .then((response) => {
        resolve(parseUser(response.data.results));
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const parseUser = (payload) => {
  if (payload.length <= 0) return "Error occurred!";

  let userList = payload.map((user) => {
    return (
      `${getName(user.name)} \n` +
      `${getAge(user.dob)} \n` +
      `${getEmail(user)} \n` +
      `${getPhone(user)} \n` +
      `${getAddress(user.location)}`
    );
  });

  return userList.length > 0 ? userList.join("\n") : userList.join();
};

const getName = ({ first, last }) => `Name: ${first} ${last}`;

const getAddress = ({ street, city, state, country, postcode }) =>
  `Address: ${street.number} ${street.name}, ${city} ${state}, ${country} (${postcode})`;

const getEmail = ({ email }) => `Email: ${email}`;

const getAge = ({ age }) => `Age: ${age}`;

const getPhone = ({ phone, cell }) =>
  `Home Number: ${phone} \nMobile Number: ${cell}`;

module.exports = { getRandomUser };

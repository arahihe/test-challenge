// You already have the methods imported
// import { default as expect } from "expect";
// import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

const users = require('../data.js');
const {
    getUsersById,
    // getUsersByUsername
} = require('../users.js');

describe('getUsersById', () => {
    it('It should retrieve the correct user for a given ID', () => {
        const user = users[1];
        expect(getUsersById(2)).toEqual(user);
    });

   it('It should fail to get the user', () => {
    const user = users[3];
    expect(getUsersById(2)).toEqual(user);
   })
});


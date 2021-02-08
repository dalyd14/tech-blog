const User = require('../../model/User');

const userData = [
    {
        username: "dave1",
        email: "dave1@mail.com",
        password: "dave1"
    },
    {
        username: "dave2",
        email: "dave2@mail.com",
        password: "dave2"
    },
    {
        username: "dave3",
        email: "dave3@mail.com",
        password: "dave3"
    },
    {
        username: "dave4",
        email: "dave4@mail.com",
        password: "dave4"
    },
    {
        username: "dave5",
        email: "dave5@mail.com",
        password: "dave5"
    },
    {
        username: "dave6",
        email: "dave6@mail.com",
        password: "dave6"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
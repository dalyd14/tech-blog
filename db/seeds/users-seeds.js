const User = require('../../model/User');

const userData = [
    {
        username: "dave1",
        password: "dave1"
    },
    {
        username: "dave2",
        password: "dave2"
    },
    {
        username: "dave3",
        password: "dave3"
    },
    {
        username: "dave4",
        password: "dave4"
    },
    {
        username: "dave5",
        password: "dave5"
    },
    {
        username: "dave6",
        password: "dave6"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
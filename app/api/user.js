// "fake" getting user list from backend
// normally it will be ajax request
let users =
  {
    "data": [
    {
      "name": "Joe",
      "age": 24,
      "priority": 1,
      "category": "cat2"
    },
    {
        "name": "Jane",
        "age": 76,
        "priority": 4,
        "category": "cat1"
    },
    {
      "name": "Kevin",
      "age": 32,
      "priority": 2,
      "category": "cat2"
  },
  {
    "name": "Lucy",
    "age": 54,
    "priority": 1,
    "category": "cat3"
  },
  {
    "name": "Colin",
    "age": 34,
    "priority": 3,
    "category": "cat1"
  },
  {
    "name": "Franny",
    "age": 36,
    "priority": 2,
    "category": "cat3"
  },
  {
    "name": "Neil",
    "age": 74,
    "priority": 4,
    "category": "cat2"
  },
  {
    "name": "Katy",
    "age": 55,
    "priority": 3,
    "category": "cat2"
  }
  ]
};

let usersApi = {
  getUsers: function() {
    return users.data;
  }
}

module.exports = usersApi;

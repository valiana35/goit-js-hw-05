'use strict';
const getUsersWithFriend = (users, friendName) => {
    const includFrendName = users.filter(user => user.friends.includes(friendName));
    return includFrendName;
}
const users = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  console.log(getUsersWithFriend(users, "Briana Decker")); 
  console.log(getUsersWithFriend(users, "Goldie Gentry"));
  console.log(getUsersWithFriend(users, "Adrian Cross" ));
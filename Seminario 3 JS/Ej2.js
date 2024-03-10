fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>{const vect = json;

  console.log(vect);

  const fullnames = [];

  vect.forEach((user) => {
    fullnames.push(user.name + " (" + user.username + ")");
  });
  
  const usersInCity = vect.filter(user => user.address.city === 'Roscoeview' || user.address.city === 'Gwenborough');

    console.log(usersInCity);

console.log(fullnames);
const totalUsersWithWebsite = vect.reduce((acc, user) => {
  if (user.website) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

console.log("Total de usuarios con sitio web:", totalUsersWithWebsite);

  } 
  );
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => 
    Promise.resolve(
      allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
        
      )
    
  );


const logger = updatedUsers => console.table(updatedUsers);


console.log(toggleUserState(users, 'Mango').then(logger));
console.log(toggleUserState(users, 'Lux').then(logger));
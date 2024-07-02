const users = {
    user1: { 
      age: 44, 
      name: "picard" 
    },
    user2: { 
      age: 12, 
      name: "sisko" 
    },
    user3: { 
      age: 109, 
      name: "janeway" 
    },
  };


/* using a function, Filter for all users older than 30 
and store their data in an array of object 
[
  { id: 'user1', age: 44, name: 'picard' },
  { id: 'user3', age: 109, name: 'janeway' }
]
 */

function filterUsers(users) {
    return Object.entries(users).filter(([key, value]) => value.age > 30).map(([key, value]) => ({ id: key, ...value }));
}

console.log(filterUsers(users));//[ { id: 'user1', age: 44, name: 'picard' }, { id: 'user3', age: 109, name: 'janeway' } ]
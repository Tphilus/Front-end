let person: [string, number] = ["john", 25];

let date: [number, number, number] = [12, 17, 2001];
date.push(34)
console.log(date);


function getPerson(): [string, number] {
  return ['john', 25]
}
let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

enum ServerResponseStatus {
  Success = 200,
  Error = 500,
  // Pending,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if(typeof value === 'number'){
    console.log(value);
  }
})

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);


enum UserRole { 
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
}

function createUser(user: User): User {
  return user
}

const user: User = createUser({
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ['john@gmail.com', '123-456-789']
})

console.log(user);

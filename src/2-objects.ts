// type alias
type User = {
  id?: number,
  username: string,
  password: string
}

interface UserInterface {
  id?: number,
  username: string,
  password: string,
  // methodA: (arg: string) => number;
};

const user0: User = {
  id: 1,
  username: 'Gloria',
  password: '1234',
};

const user1: UserInterface = {
  id: 1,
  username: 'Gloria',
  password: '1234',
  // created_at: ''
};

const users: User[] = [];

// TS interface is open
// in another file
interface UserInterface {
  created_at?: string
};

const user2: UserInterface = {
  id: 1,
  username: 'Gloria',
  password: '1234',
  created_at: Date()
};
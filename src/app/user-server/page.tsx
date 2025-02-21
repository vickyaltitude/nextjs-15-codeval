type users = {
  name: string;
  email: string;
  username: string;
  phone: number;
  website: string;
};

export default async function UserServer() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedUsers: users[] = await users.json();

  return parsedUsers.map((users) => (
    <ul key={users.name}>
      {" "}
      <li>{users.name}</li>
      <li>{users.email}</li>
      <li>{users.username}</li>
      <li>{users.phone}</li>
      <li>{users.website}</li>
    </ul>
  ));
}

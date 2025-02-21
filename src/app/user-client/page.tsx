"use client";
type Users = {
  name: string;
  email: string;
  username: string;
  phone: number;
  website: string;
};
import { useState, useEffect } from "react";

export default function UserClient() {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function dataFetch() {
      try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!users.ok) throw new Error("Error fetching users data");
        const parsedUsers = await users.json();
        setUsers(parsedUsers);
      } catch (err) {
        setError(err as string);
      } finally {
        setIsLoading(false);
      }
    }

    dataFetch();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return users.map((users) => (
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

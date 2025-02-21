type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function Author({ userId }: { userId: number }) {
  const authors = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const parsedAuthors: Author = await authors.json();
  return <p style={{ color: "lightgreen" }}>{parsedAuthors.username}</p>;
}

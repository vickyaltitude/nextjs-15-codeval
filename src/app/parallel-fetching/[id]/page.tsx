type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Albums = {
  id: number;
  userId: number;
  title: string;
};

async function fetchPosts(id: string) {
  const getPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return getPosts.json();
}

async function fetchAlbums(id: string) {
  const getAlbums = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  return getAlbums.json();
}

export default async function ParellelFetching({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postsFetch = fetchPosts(id);
  const albumsFetch = fetchAlbums(id);
  const [posts, albums] = await Promise.all([postsFetch, albumsFetch]);

  return (
    <div>
      <ul key={posts.id}>
        <li>{posts.title}</li>
        <li>{posts.body}</li>
        <li>{posts.userId}</li>
      </ul>

      <ul key={albums.id}>
        <li>{albums.title}</li>
        <li>{albums.userId}</li>
      </ul>
    </div>
  );
}

import { Author } from "./author";

//sequential fetching
type Blogs = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default async function Blogs() {
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogPosts: Blogs[] = await blogs.json();
  const finalBlog = blogPosts.filter((blog) => blog.id % 10 === 0);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "black",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      {finalBlog.map((blogs) => {
        return (
          <div
            key={blogs.id}
            style={{
              color: "white",
              width: "200px",
              height: "auto",
              border: "2px solid white",
              background: "darkviolet",
              padding: "15px",
            }}
          >
            <h2>{blogs.title}</h2>
            <p>{blogs.body}</p>
            <Author userId={blogs.userId} />
          </div>
        );
      })}
    </div>
  );
}

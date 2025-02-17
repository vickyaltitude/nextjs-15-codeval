import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComment = query
    ? comments.filter((com) => com.comment.includes(query))
    : comments;
  return Response.json(filteredComment);
}

export async function POST(request: Request) {
  const newComment = await request.json();
  const newComm = {
    id: comments?.length + 1 || 1,
    comment: newComment.comment,
  };
  comments.push(newComm);

  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.filter((com) => com.id === Number(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();
  const findInd = comments.findIndex((comm) => comm.id === Number(id));
  comments[findInd].comment = text;
  return Response.json(comments[findInd]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const findInd = comments.findIndex((com) => com.id === Number(id));
  const deletedComment = comments[findInd];
  comments.splice(findInd, 1);
  return Response.json(deletedComment);
}

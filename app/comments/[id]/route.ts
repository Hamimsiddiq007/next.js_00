import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return Response.json(comment || { error: "Comment not found" }, {
    status: comment ? 200 : 404,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const body = await request.json();
    const {text} = body;

    const commentIndex = comments.findIndex((c) => c.id === parseInt(id));
    comments[commentIndex].text = text;

    return Response.json(comments[commentIndex]);
}

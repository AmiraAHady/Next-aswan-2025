import { posts } from "./data";

export async function GET() {
  return new Response(JSON.stringify(posts));
}
export async function POST(req) {
  const post = await req.json();
  let newPost = {
    id: posts.length + 1,
    title: post.title,
  };
  posts.push(newPost);

  return new Response(JSON.stringify(newPost));
}
// uuid

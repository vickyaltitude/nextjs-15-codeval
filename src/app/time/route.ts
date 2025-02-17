export const dynamic = "force-static";
export const revalidate = 10;
//so dynamic and revalidate are used for caching in next js by default but it will not work if we use request objects or other dynamic functions of next js
export async function GET() {
  return new Response(new Date().toLocaleString());
}

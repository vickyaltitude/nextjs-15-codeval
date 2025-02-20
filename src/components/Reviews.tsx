export default async function Reviews() {
  await new Promise((res) => setTimeout(() => res("done"), 3000));
  return <h3>This is reviews page</h3>;
}

export default async function Products() {
  const resultProm: string = await new Promise((res) =>
    setTimeout(() => res("done"), 3000)
  );
  console.log(resultProm);
  return <h3>This is Products page{resultProm}</h3>;
}

export default async function DocsDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2)
    return (
      <h2>
        This is Topic {slug[0]} and content{slug[1]}
      </h2>
    );
  else if (slug?.length === 1) return <h2>This is topic {slug[0]}</h2>;
  return <h1>this is document details page</h1>;
}

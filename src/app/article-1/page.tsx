export default async function Articles({
  searchParams,
}: {
  searchParams: Promise<{ lang: "en" | "sp" | "fr" }>;
}) {
  const { lang } = await searchParams;
  return <h3>This is article page {lang}</h3>;
}

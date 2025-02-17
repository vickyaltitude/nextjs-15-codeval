import Link from "next/link";

export default function f1() {
  return (
    <>
      <h2>This is to demonstrate intercepting routes</h2>;
      <Link href="/f1/f2">F2</Link>{" "}
    </>
  );
}

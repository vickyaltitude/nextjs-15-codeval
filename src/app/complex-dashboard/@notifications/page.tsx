import Link from "next/link";

//so we can give link within parallel route in it.. and if we go deeper and refresh the page we will get 404 error to avoid that we will be having default page for rescue
export default function Notifications() {
  return (
    <>
      <h3>Notifications</h3>
      <Link href="/complex-dashboard/archive">Archive</Link>
    </>
  );
}

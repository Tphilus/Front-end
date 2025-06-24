import Link from "next/link";

export default function Info() {
  return (
    <div>
      <h1 className=" text-7xl" >HomPage</h1>
      <Link href='/info/contact' >Contact </Link>
    </div>
  );
}

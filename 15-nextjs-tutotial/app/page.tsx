import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className=" text-7xl" >HomPage</h1>
      <Link href='/about' >About </Link>
    </div>
  );
}

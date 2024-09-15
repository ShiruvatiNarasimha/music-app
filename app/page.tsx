import Image from "next/image";
import { Appbar } from "./components/Appbar";

export default function Home() {
  return (
    <main>
      <Appbar/>
    </main>
  );
}

console.log(process.env.GOOGLE_CLIENT_ID)
console.log(process.env.GOOGLE_CLIENT_SECRET)
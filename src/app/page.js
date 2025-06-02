import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "./_lib/auth";

export default async function Home() {
  const info = await auth();
  console.log(info);
  return (
    <>
      <h1>Welcome to my page</h1>
      {info?.user && <h1>{info.user.name}</h1>}
    </>
  );
}

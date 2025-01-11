import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-between items-center">
        <h1>Home Page</h1>
      </main>
    </div>
  );
}

import { Heading } from "@/components/heading";
import { Nav } from "@/components/heading/nav/nav";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-200 min-h-screen">
      <Nav />
      <div className="px-10">
        <Heading />
      </div>
    </main>
  );
}

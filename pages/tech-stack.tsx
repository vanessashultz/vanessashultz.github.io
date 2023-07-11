import { Nav } from "@/components/heading/nav/nav";
import { TechStacks } from "@/components/techStacks";

export default function TechStackPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-200 min-h-screen">
      <Nav />
      <div className="px-10 text-gray-primary items-center">
        {/* TODO: Create this page */}
        <TechStacks />
      </div>
    </main>
  );
}

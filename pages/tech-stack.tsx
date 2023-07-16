import { Nav } from '@/components/nav';
import { TechStacks } from '@/components/techStacks';

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-200">
      <Nav />
      <div className="items-center px-10 text-gray-primary">
        {/* TODO: Create this page */}
        <TechStacks />
      </div>
    </main>
  );
}

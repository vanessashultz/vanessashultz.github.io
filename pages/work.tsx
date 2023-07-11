import { Nav } from "@/components/heading/nav/nav";
import { WorkExperiences } from "@/components/work";

export default function Work() {
  return (
    <main
      className="bg-gradient-to-b from-white to-gray-200 min-h-screen"
    >
      <Nav />
      <div className="px-10 text-gray-primary items-center">
        <WorkExperiences />
      </div>
    </main>
  )
}

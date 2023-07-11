import { Nav } from "@/components/heading/nav/nav";
import { LeadershipExperience } from "@/components/leadership";

export default function Leadership() {
  return (
    <main
      className="bg-gradient-to-b from-white to-gray-200 min-h-screen"
    >
      <Nav />
      <div className="px-10 text-gray-primary items-center">
        <LeadershipExperience />
      </div>
    </main>
  )
}

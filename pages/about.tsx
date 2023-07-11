import { AboutMe } from "@/components/aboutMe";
import { Nav } from "@/components/heading/nav/nav";

export default function About() {
  return (
    <main
      className="bg-gradient-to-b from-white to-gray-200 min-h-screen"
    >
      <Nav />
      <div className="px-10 text-gray-primary items-center">
        <AboutMe />
      </div>
    </main>
  )
}

import { AboutMe } from "@/components/aboutMe";
import { Heading } from "@/components/heading";
import { Nav } from "@/components/heading/nav";
import { TechStacks } from "@/components/techStacks";

export default function Home() {
  return (
    <main
      className="bg-white"
    >
      <Nav />
      <div className="px-10">
        <Heading />
        <TechStacks />
        <AboutMe />
      </div>
    </main>
  )
}

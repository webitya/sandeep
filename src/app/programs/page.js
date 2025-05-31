import ProgramsHero from "@/components/ProgramsPageV2/ProgramsHero"
import ProgramsOverview from "@/components/ProgramsPageV2/ProgramsOverview"
import ProgramsTracks from "@/components/ProgramsPageV2/ProgramsTracks"
import ProgramsSupport from "@/components/ProgramsPageV2/ProgramsSupport"
import ProgramsCTA from "@/components/ProgramsPageV2/ProgramsCTA"
import FooterEl from "@/Components/FooterEl"

export const metadata = {
  title: "Our Programs - Sales Syllabus Academy",
  description: "The 'Next Phase' - A 2-year career transformation journey for future leaders.",
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <ProgramsHero />
      <ProgramsOverview />
      <ProgramsSupport />
      <ProgramsTracks />
      <ProgramsCTA />
      <FooterEl/>
    </main>
  )
}

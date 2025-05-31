import AboutHero from "../../Components/AboutPageV2/AboutHero"
import AboutMission from "../../Components/AboutPageV2/AboutMission"
import AboutConsulting from "../../Components/AboutPageV2/AboutConsulting"
import AboutDifference from "../../Components/AboutPageV2/AboutDifference"
import AboutCTA from "../../Components/AboutPageV2/AboutCTA"
import FooterEl from "@/Components/FooterEl"

export const metadata = {
  title: "About Us - Sales Syllabus Academy",
  description: "Built by Sales and Marketing Experts. Designed for Future Leaders.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutConsulting />
      <AboutDifference />
      <AboutCTA />
      <FooterEl/>
    </main>
  )
}

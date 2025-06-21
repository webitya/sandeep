import ForSmeHero from "../../Components/FORSME/ForSmeHero"
import ForSmeProblem from "../../Components/FORSME/ForSmeProblem"
import ForSmeProgram from "../../Components/FORSME/ForSmeProgram"
import ForSmeJourney from "../../Components/FORSME/ForSmeJourney"
import ForSmeCaseStudies from "../../Components/FORSME/ForSmeCaseStudies"
import ForSmeTargetAudience from "../../Components/FORSME/ForSmeTargetAudience"
import ForSmePricing from "../../Components/FORSME/ForSmePricing"
import ForSmeFounder from "../../Components/FORSME/ForSmeFounder"
import ForSmeCTA from "../../Components/FORSME/ForSmeCTA"
import FooterEl from "@/Components/FooterEl"

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <ForSmeHero />
      <ForSmeProblem />
      <ForSmeProgram />
      <ForSmeJourney />
      <ForSmeCaseStudies />
      <ForSmeTargetAudience />
      <ForSmePricing />
      <ForSmeFounder />
      <ForSmeCTA />
    </div>
    <FooterEl/>
</>
  )
}

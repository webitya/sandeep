import RevenuePilotHero from "../../Components/RevenuePilotPageV2/RevenuePilotHero"
import RevenuePilotDeliverables from "../../Components/RevenuePilotPageV2/RevenuePilotDeliverables"
import RevenuePilotProblem from "../../Components/RevenuePilotPageV2/RevenuePilotProblem"
import RevenuePilotGuarantee from "../../Components/RevenuePilotPageV2/RevenuePilotGuarantee"
import RevenuePilotAudience from "../../Components/RevenuePilotPageV2/RevenuePilotAudience"
import RevenuePilotCTA from "../../Components/RevenuePilotPageV2/RevenuePilotCTA"
import FooterEl from "@/Components/FooterEl"

export const metadata = {
  title: "RevenuePilot - Sales Syllabus Academy",
  description: "A Trained Sales Leader to Pilot Your Growth. Guaranteed.",
}

export default function RevenuePilotPage() {
  return (
    <main className="min-h-screen">
      <RevenuePilotHero />
      <RevenuePilotDeliverables />
      <RevenuePilotProblem />
      <RevenuePilotGuarantee />
      <RevenuePilotAudience />
      <RevenuePilotCTA />
      <FooterEl/>
    </main>
  )
}

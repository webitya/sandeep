import RevenuePilotHero from "@/components/RevenuePilotPageV2/RevenuePilotHero"
import RevenuePilotDeliverables from "@/components/RevenuePilotPageV2/RevenuePilotDeliverables"
import RevenuePilotProblem from "@/components/RevenuePilotPageV2/RevenuePilotProblem"
import RevenuePilotGuarantee from "@/components/RevenuePilotPageV2/RevenuePilotGuarantee"
import RevenuePilotAudience from "@/components/RevenuePilotPageV2/RevenuePilotAudience"
import RevenuePilotCTA from "@/components/RevenuePilotPageV2/RevenuePilotCTA"
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

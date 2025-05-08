import MarketingSupportHero from "./marketing-support-hero/marketing-support-hero"
import MarketingSupportIntro from "./marketing-support-intro/marketing-support-intro"
import MarketingSupportProblem from "./marketing-support-problem/marketing-support-problem"
import MarketingSupportOutcomes from "./marketing-support-outcomes/marketing-support-outcomes"
import MarketingSupportFAQ from "./marketing-support-faq/marketing-support-faq"
import MarketingSupportCTA from "./marketing-support-cta/marketing-support-cta"

export default function MarketingSupport() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingSupportHero />
      <MarketingSupportIntro />
      <MarketingSupportProblem />
      <MarketingSupportOutcomes />
      <MarketingSupportFAQ />
      <MarketingSupportCTA />
    </div>
  )
}

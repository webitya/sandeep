import ServicePageHero from "./ServicePageHero/ServicePageHero"
import ServicePageOverview from "./ServicePageOverview/ServicePageOverview"
import ServicePageServices from "./ServicePageServices/ServicePageServices"
import ServicePageClients from "./ServicePageClients/ServicePageClients"
import ServicePageEngagement from "./ServicePageEngagement/ServicePageEngagement"
import ServicePageFAQ from "./ServicePageFAQ/ServicePageFAQ"
import ServicePageCTA from "./ServicePageCTA/ServicePageCTA"

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicePageHero />
      <ServicePageOverview />
      <ServicePageServices />
      <ServicePageClients />
      <ServicePageEngagement />
      <ServicePageFAQ />
      <ServicePageCTA />
    </div>
  )
}

export default ServicePage

import FooterEl from "@/Components/FooterEl"
import HomeFullValueDelivered from "../Components/HomePage/HomeFullValueDelivered"
import HomePageCompany from "../Components/HomePage/HomePageCompany"
import HomePageCTA from "../Components/HomePage/HomePageCTA"
import HomePageFAQSection from "../Components/HomePage/HomePageFAQS"
import HomePageHeroSection from "../Components/HomePage/HomePageHero"
import HomePageTypesOfHiring from "../Components/HomePage/HomePageHiring"
import HomePageExecutionProcess from "../Components/HomePage/HomePageProcess"
import HomePageRevenueTeamFramework from "../Components/HomePage/HomePageRevenue"
import HomePageTestimonials from "../Components/HomePage/HomePageTestimonial"
import HomePageWho from "../Components/HomePage/HomePageWho"
import HomeRecruitment from "../Components/HomePage/HomeRecruitment"
// ===================================================================

const HomePage=()=>{
  return (
    <>
      <HomePageHeroSection/>
      <HomePageCompany/>
      <HomePageWho/>
      <HomePageRevenueTeamFramework/>
      <HomePageExecutionProcess/>
      <HomeRecruitment/>
      <HomePageTypesOfHiring/>
      <HomeFullValueDelivered/>
      <HomePageTestimonials/>
      <HomePageFAQSection/>
      <HomePageCTA/>
 
      <FooterEl/>
    </>
  )
}
export default HomePage









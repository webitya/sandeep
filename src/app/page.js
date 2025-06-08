import FooterEl from "@/Components/FooterEl"
// import HomeFullValueDelivered from "../Components/HomePage/HomeFullValueDelivered"
// import HomePageCompany from "../Components/HomePage/HomePageCompany"
// import HomePageCTA from "../Components/HomePage/HomePageCTA"
// import HomePageFAQSection from "../Components/HomePage/HomePageFAQS"
// import HomePageHeroSection from "../Components/HomePage/HomePageHero"
// import HomePageTypesOfHiring from "../Components/HomePage/HomePageHiring"
// import HomePageExecutionProcess from "../Components/HomePage/HomePageProcess"
// import HomePageRevenueTeamFramework from "../Components/HomePage/HomePageRevenue"
// import HomePageTestimonials from "../Components/HomePage/HomePageTestimonial"
// import HomePageWho from "../Components/HomePage/HomePageWho"
// import HomeRecruitment from "../Components/HomePage/HomeRecruitment"
// ===================================================================
import HomeHero from "../Components/HomePageV2/HomeHero"
import HomeAbout from "../Components/HomePageV2/HomeAbout"
import HomeFeatures from "../Components/HomePageV2/HomeFeatures"
import HomeAudience from "../Components/HomePageV2/HomeAudience"
import HomeComparison from "../Components/HomePageV2/HomeComparison"
import HomeProgramArchitecture from "../Components/HomePageV2/HomeProgramArchitecture"
import HomeFAQ from "../Components/HomePageV2/HomeFAQ"
import HomeTestimonials from "../Components/HomePageV2/HomeTestimonials"
import HomeCTA from "../Components/HomePageV2/HomeCTA"
import HomePageCompany from "@/Components/HomePage/HomePageCompany"

const HomePage=()=>{
  return (
    <>
      {/* <HomePageHeroSection/>
      <HomePageCompany/>
      <HomePageWho/>
      <HomePageRevenueTeamFramework/>
      <HomePageExecutionProcess/>
      <HomeRecruitment/>
      <HomePageTypesOfHiring/>
      <HomeFullValueDelivered/>
      <HomePageTestimonials/>
      <HomePageFAQSection/>
      <HomePageCTA/> */}
      <HomeHero/>
       <HomePageCompany/>
      <HomeAbout/>
      <HomeFeatures/>
      <HomeAudience/>
      <HomeComparison/>
      <HomeProgramArchitecture/>
      <HomeFAQ/>
      <HomeTestimonials/>
      <HomeCTA/>
 
      <FooterEl/>
    </>
  )
}
export default HomePage









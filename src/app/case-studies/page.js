import CaseStudiesShowcase from "@/Components/CaseStudies";
import FooterEl from "@/Components/FooterEl";



export default function CaseStudiesShowcaseCom() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col">

<main className="flex-grow">
      <CaseStudiesShowcase/>
</main>

</div>
<FooterEl/>
    </>
  )
}

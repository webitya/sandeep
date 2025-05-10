import FooterEl from "@/Components/FooterEl"
import BlogCards from "../../Components/Blogs/blog-cards"

export default function BlogsPage() {
  return (
   <>
    <div className="space-y-8 pt-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blogs</h1>

      </div>

      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
        <div className="text-gray-600">Showing all articles</div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Sort by:</span>
          <select className="border-none bg-transparent text-gray-800 font-medium focus:outline-none focus:ring-0 text-sm">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      <BlogCards />
    </div>
    <FooterEl/>
   </>
  )
}

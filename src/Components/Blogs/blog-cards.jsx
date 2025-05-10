import { blogsData } from "./BlogsData/blogsData"
import BlogCard from "./blog-card"

export default function BlogCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogsData.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

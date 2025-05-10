import Link from "next/link"

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          {blog.image && (
            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">Business</span>
            <span className="text-xs text-gray-500">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <h2 className="text-xl font-semibold mb-3 group-hover:text-indigo-700 transition-colors line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
            {blog.excerpt || blog.content.substring(0, 150)}...
          </p>

          <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-700 font-medium text-sm">
                {blog.author
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">{blog.author}</span>
              <div className="text-xs text-gray-500">5 min read</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

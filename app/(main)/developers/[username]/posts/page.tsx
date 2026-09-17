import { posts } from "../../../../data/posts";


    
    export default function DevelopersPostsPage() {
      return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
          <div className="mx-auto max-w-6xl">
            
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Posts
            </h1>
    
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: (typeof posts)[number]) => (
                <div
                  key={post.id}
                  className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <h2 className="text-xl font-semibold text-gray-900">
                    {post.username}
                  </h2>
    
                  <p className="mt-1 text-sm text-gray-500">
                    {post.title}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {post.content}
                  </p>
                </div>
              ))}
            </div>
    
          </div>
        </main>
      )
    }
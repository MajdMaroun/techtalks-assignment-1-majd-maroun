import { communities } from '../../data/communities'

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Communities
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community: (typeof communities)[number]) => (
            <div
              key={community.slug}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {community.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {community.description}
              </p>

              <p className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {community.members}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
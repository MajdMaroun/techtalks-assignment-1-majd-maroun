import { developers } from '../../data/developers'

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Developers
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((developer: (typeof developers)[number]) => (
            <div
              key={developer.name}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {developer.username}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {developer.name}
              </p>

              <p className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {developer.role}
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                {developer.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
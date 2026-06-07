import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-center">

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Find Your
            <span className="text-blue-600"> Dream College</span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Search colleges, compare fees, placements, ratings and make better
            career decisions with our College Discovery Platform.
          </p>

          <div className="mt-12 flex justify-center gap-6">

            <Link
              href="/colleges"
              className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Explore Colleges
            </Link>

            <Link
              href="/compare"
              className="rounded-xl border-2 border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Compare Colleges
            </Link>

          </div>

        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl">🔍</div>
            <h2 className="mt-4 text-2xl font-bold">Search Colleges</h2>
            <p className="mt-2 text-gray-600">
              Browse colleges by name, location, fees, and ratings.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl">⚖️</div>
            <h2 className="mt-4 text-2xl font-bold">Compare</h2>
            <p className="mt-2 text-gray-600">
              Compare colleges side-by-side to make informed decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl">📈</div>
            <h2 className="mt-4 text-2xl font-bold">Placement Insights</h2>
            <p className="mt-2 text-gray-600">
              View placement statistics, fees, and ratings in one place.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
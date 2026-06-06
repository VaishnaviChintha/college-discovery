
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements: number;
  description: string;
};

export default function CollegesPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchColleges = async (query = "") => {
    try {
      setLoading(true);

      const res = await fetch(`/api/colleges?search=${query}`);
      const data = await res.json();

      setColleges(data.colleges || []);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColleges(search);
  }, [search]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        🎓 College Discovery Platform
      </h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search colleges (e.g. IIT, NIT, VIT...)"
        className="border p-2 w-full mb-6 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* LOADING STATE */}
      {loading ? (
        <p className="text-gray-600">Loading colleges...</p>
      ) : colleges.length === 0 ? (
        <p className="text-gray-500">No colleges found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {colleges.map((college) => (
            <Link key={college.id} href={`/college/${college.id}`}>
    <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
      <h2 className="text-xl font-semibold">
        {college.name}
      </h2>

      <p>{college.location}</p>
    </div>
  </Link>
          ))}
        </div>
      )}
    </div>
  );
}
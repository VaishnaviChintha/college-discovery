"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CollegeDetailPage() {
  const params = useParams();
  const id = params?.id;

  const [college, setCollege] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/colleges/${id}`);
        const data = await res.json();
        setCollege(data.college);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchData();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;

  if (!college) return <p className="p-6">College not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{college.name}</h1>
      <p>📍 {college.location}</p>
      <p>💰 Fees: {college.fees}</p>
      <p>⭐ Rating: {college.rating}</p>
      <p>📊 Placements: {college.placements}%</p>
      <p className="mt-4">{college.description}</p>
    </div>
  );
}
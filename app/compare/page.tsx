"use client";

import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements: number;
};

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data.colleges));
  }, []);

  const c1 = colleges.find((c) => c.id === college1);
  const c2 = colleges.find((c) => c.id === college2);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Compare Colleges
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          className="border p-2 rounded"
          value={college1}
          onChange={(e) => setCollege1(e.target.value)}
        >
          <option value="">Select College 1</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          value={college2}
          onChange={(e) => setCollege2(e.target.value)}
        >
          <option value="">Select College 2</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {c1 && c2 && (
        <table className="w-full border">
          <tbody>
            <tr>
              <td className="border p-2 font-bold">Name</td>
              <td className="border p-2">{c1.name}</td>
              <td className="border p-2">{c2.name}</td>
            </tr>

            <tr>
              <td className="border p-2 font-bold">Location</td>
              <td className="border p-2">{c1.location}</td>
              <td className="border p-2">{c2.location}</td>
            </tr>

            <tr>
              <td className="border p-2 font-bold">Fees</td>
              <td className="border p-2">₹{c1.fees}</td>
              <td className="border p-2">₹{c2.fees}</td>
            </tr>

            <tr>
              <td className="border p-2 font-bold">Rating</td>
              <td className="border p-2">{c1.rating}</td>
              <td className="border p-2">{c2.rating}</td>
            </tr>

            <tr>
              <td className="border p-2 font-bold">Placements</td>
              <td className="border p-2">{c1.placements}%</td>
              <td className="border p-2">{c2.placements}%</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
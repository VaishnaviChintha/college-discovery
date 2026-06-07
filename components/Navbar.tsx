"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Colleges", href: "/colleges" },
    { name: "Compare", href: "/compare" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🎓
          </div>

          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              College Discovery
            </h1>
            <p className="text-xs text-gray-500">
              Find • Compare • Decide
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
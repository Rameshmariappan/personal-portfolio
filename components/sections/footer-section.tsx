"use client"

export function FooterSection() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Ramaiah M. Designed and engineered in Chennai.
        </p>
      </div>
    </footer>
  )
}

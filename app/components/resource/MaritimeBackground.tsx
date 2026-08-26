export default function MaritimeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* World Map */}

      <svg
        className="absolute right-0 top-24 h-[420px] w-[420px] opacity-[0.035] text-blue-900"
        viewBox="0 0 500 500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="250" cy="250" r="180" />
        <ellipse cx="250" cy="250" rx="180" ry="70" />
        <ellipse cx="250" cy="250" rx="180" ry="130" />
        <path d="M70 250h360" />
        <path d="M250 70v360" />
      </svg>

      {/* Compass */}

      <svg
        className="absolute left-0 top-40 h-56 w-56 opacity-[0.03] text-blue-900"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="100" cy="100" r="80" />
        <path d="M100 30 L115 100 L100 170 L85 100 Z" />
        <path d="M30 100 H170" />
        <path d="M100 30 V170" />
      </svg>

      {/* Wave */}

      <svg
        className="absolute bottom-16 left-12 w-72 opacity-[0.03] text-blue-900"
        viewBox="0 0 300 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M0 40 C30 20 60 60 90 40 S150 20 180 40 S240 60 300 40" />
      </svg>

    </div>
  );
}

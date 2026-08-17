"use client";

import {
  Anchor,
  Ship,
  Globe2,
  Clock3,
  MapPin,
  Plane,
  Truck,
  Droplets,
  Fuel,
  Trash2,
  Package,
  Warehouse,
  Users,
  Wrench,
  ClipboardCheck,
  LifeBuoy,
  ExternalLink,
} from "lucide-react";

type PortDashboardProps = {
  port: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };

    stats: {
      icon: "anchor" | "ship" | "globe" | "clock";
      title: string;
      value: string;
    }[];

    overview: {
      title: string;
      description: string;
    };

    quickFacts: {
      label: string;
      value: string;
    }[];

    facilities: string[];

    services: string[];

    restrictions: string[];

    airport: {
      name: string;
      distance: string;
    };

    hotels: string[];

    map: {
      title: string;
      url: string;
    };

    cta: {
      title: string;
      description: string;
    };
  };
};

/* =========================================================
   COLORS
========================================================= */

const SLATE_BLUE = "#6B7FA8";
const DARK_BLUE = "#102A63";
const YELLOW = "#FACC15";

/* =========================================================
   ICON HELPERS
========================================================= */

function getStatIcon(
  icon: PortDashboardProps["port"]["stats"][number]["icon"]
) {
  switch (icon) {
    case "anchor":
      return Anchor;

    case "ship":
      return Ship;

    case "globe":
      return Globe2;

    case "clock":
      return Clock3;

    default:
      return Anchor;
  }
}

function getQuickFactIcon(label: string) {
  switch (label) {
    case "Province":
      return MapPin;

    case "Location":
      return MapPin;

    case "Port Authority":
      return Anchor;

    case "Nearest Airport":
      return Plane;

    case "Travel Time":
      return Truck;

    case "Pilotage":
      return Ship;

    case "Tug Assistance":
      return Anchor;

    case "Fresh Water":
      return Droplets;

    case "Bunkering":
      return Fuel;

    case "Garbage Disposal":
      return Trash2;

    default:
      return MapPin;
  }
}

function getFacilityIcon(facility: string) {
  if (
    facility.includes("Container") ||
    facility.includes("Cargo")
  ) {
    return Package;
  }

  if (
    facility.includes("Bulk") ||
    facility.includes("Warehouse") ||
    facility.includes("Storage")
  ) {
    return Warehouse;
  }

  if (
    facility.includes("RoRo") ||
    facility.includes("Ro-Ro")
  ) {
    return Truck;
  }

  if (facility.includes("Passenger")) {
    return Users;
  }

  if (facility.includes("Water")) {
    return Droplets;
  }

  if (
    facility.includes("Waste") ||
    facility.includes("Garbage")
  ) {
    return Trash2;
  }

  if (facility.includes("Bunkering")) {
    return Fuel;
  }

  return Ship;
}

function getServiceIcon(service: string) {
  if (service.includes("Port Agency")) {
    return Anchor;
  }

  if (service.includes("Protective")) {
    return Ship;
  }

  if (service.includes("Crew")) {
    return Users;
  }

  if (service.includes("Ship Supply")) {
    return Package;
  }

  if (
    service.includes("Marine") ||
    service.includes("Logistics")
  ) {
    return Truck;
  }

  if (
    service.includes("Technical") ||
    service.includes("Attendance")
  ) {
    return Wrench;
  }

  if (
    service.includes("Customs") ||
    service.includes("Clearance")
  ) {
    return ClipboardCheck;
  }

  if (
    service.includes("Offshore") ||
    service.includes("Support")
  ) {
    return LifeBuoy;
  }

  return Anchor;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PortDashboard({
  port,
}: PortDashboardProps) {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: SLATE_BLUE,
      }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="w-full overflow-hidden"
        style={{
          backgroundColor: SLATE_BLUE,
        }}
      >
        <div
          className="
            w-full
            min-h-[560px]
            lg:min-h-[620px]
            grid
            grid-cols-1
            lg:grid-cols-[minmax(260px,1fr)_minmax(560px,3fr)_minmax(260px,1fr)]
          "
        >
          {/* =================================================
              LEFT SLATE BLUE PANEL
          ================================================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              px-8
              py-12
              lg:px-10
              xl:px-14
              order-2
              lg:order-1
            "
            style={{
              backgroundColor: SLATE_BLUE,
            }}
          >
            <div className="w-full max-w-[460px]">
              {/* SMALL LABEL */}

              <p
                className="
                  text-sm
                  md:text-base
                  font-bold
                  tracking-[0.20em]
                  uppercase
                  mb-5
                "
                style={{
                  color: "#FFFFFF",
                }}
              >
                Philippine Port Information Center
              </p>

              {/* PORT TITLE */}

              <h1
                className="
                  text-5xl
                  md:text-6xl
                  xl:text-7xl
                  font-black
                  uppercase
                  leading-[0.92]
                  tracking-tight
                "
                style={{
                  color: DARK_BLUE,
                }}
              >
                {port.hero.title}
              </h1>

              {/* YELLOW LINE */}

              <div
                className="
                  mt-6
                  h-1
                  w-24
                  rounded-full
                "
                style={{
                  backgroundColor: YELLOW,
                }}
              />

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  text-base
                  md:text-lg
                  leading-7
                  font-medium
                "
                style={{
                  color: "#FFFFFF",
                }}
              >
                {port.hero.subtitle}
              </p>
            </div>
          </div>

          {/* =================================================
              CENTER HERO IMAGE
          ================================================= */}

          <div
            className="
              relative
              w-full
              min-h-[420px]
              lg:min-h-[620px]
              overflow-hidden
              order-1
              lg:order-2
            "
          >
            <img
              src={port.hero.image}
              alt={port.hero.title}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
              "
            />

            {/* VERY LIGHT IMAGE SHADING
                Keeps the photograph vivid while improving
                visual separation from the side panels.
            */}

            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.06), transparent 18%, transparent 82%, rgba(0,0,0,0.06))",
              }}
            />
          </div>

          {/* =================================================
              RIGHT SLATE BLUE PANEL
          ================================================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              px-8
              py-12
              lg:px-10
              xl:px-14
              order-3
            "
            style={{
              backgroundColor: SLATE_BLUE,
            }}
          >
            <div className="w-full max-w-[460px] text-center lg:text-left">
              {/* COMPANY NAME */}

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  xl:text-5xl
                  font-black
                  uppercase
                  leading-tight
                  tracking-tight
                "
                style={{
                  color: "#FFFFFF",
                }}
              >
                KP GLOBAL
                <br />
                SHIPPING INC.
              </h2>

              {/* YELLOW LINE */}

              <div
                className="
                  mt-6
                  h-1
                  w-24
                  rounded-full
                  mx-auto
                  lg:mx-0
                "
                style={{
                  backgroundColor: YELLOW,
                }}
              />

              {/* TAGLINE */}

              <p
                className="
                  mt-5
                  text-base
                  md:text-lg
                  xl:text-xl
                  font-semibold
                  leading-relaxed
                "
                style={{
                  color: "#FFFFFF",
                }}
              >
                Quick, Prompt, and Stand-beside YOU
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORT STATS
      ===================================================== */}

      <section
        className="text-white"
        style={{
          backgroundColor: DARK_BLUE,
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {port.stats.map((stat, index) => {
            const Icon = getStatIcon(stat.icon);

            return (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  px-6
                  py-6
                  md:px-8
                  border-r
                  border-blue-800
                  last:border-r-0
                "
              >
                <Icon
                  className="
                    w-9
                    h-9
                    md:w-10
                    md:h-10
                    shrink-0
                  "
                  style={{
                    color: YELLOW,
                  }}
                />

                <div>
                  <p
                    className="
                      text-[10px]
                      md:text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    {stat.title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      md:text-base
                      font-medium
                      text-blue-100
                    "
                  >
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          MAIN INFORMATION DASHBOARD
      ===================================================== */}

      <section
        className="py-8 md:py-10"
        style={{
          backgroundColor: SLATE_BLUE,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* =================================================
              FIRST INFORMATION CARD
          ================================================= */}

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-xl
              shadow-lg
              overflow-hidden
            "
          >
            <div className="grid lg:grid-cols-4">

              {/* =================================================
                  PORT OVERVIEW
              ================================================= */}

              <div
                className="
                  p-6
                  md:p-7
                  border-b
                  lg:border-b-0
                  lg:border-r
                  border-slate-200
                "
              >
                <h2
                  className="
                    text-lg
                    font-extrabold
                    uppercase
                    tracking-wide
                  "
                  style={{
                    color: DARK_BLUE,
                  }}
                >
                  {port.overview.title}
                </h2>

                <div
                  className="mt-3 h-[2px] w-full"
                  style={{
                    backgroundColor: YELLOW,
                  }}
                />

                <p
                  className="
                    mt-5
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {port.overview.description}
                </p>
              </div>

              {/* =================================================
                  QUICK FACTS
              ================================================= */}

              <div
                className="
                  p-6
                  md:p-7
                  border-b
                  lg:border-b-0
                  lg:border-r
                  border-slate-200
                "
              >
                <h2
                  className="
                    text-lg
                    font-extrabold
                    uppercase
                    tracking-wide
                  "
                  style={{
                    color: DARK_BLUE,
                  }}
                >
                  Quick Facts
                </h2>

                <div
                  className="mt-3 h-[2px] w-full"
                  style={{
                    backgroundColor: YELLOW,
                  }}
                />

                <div className="mt-5 space-y-3">
                  {port.quickFacts.map((fact, index) => {
                    const Icon = getQuickFactIcon(fact.label);

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <Icon
                          className="
                            w-4
                            h-4
                            mt-0.5
                            shrink-0
                          "
                          style={{
                            color: "#EF4444",
                          }}
                        />

                        <p
                          className="
                            text-sm
                            leading-5
                            text-slate-700
                          "
                        >
                          <span className="font-bold text-slate-900">
                            {fact.label}:
                          </span>{" "}
                          {fact.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  PORT FACILITIES
              ================================================= */}

              <div
                className="
                  p-6
                  md:p-7
                  border-b
                  lg:border-b-0
                  lg:border-r
                  border-slate-200
                "
              >
                <h2
                  className="
                    text-lg
                    font-extrabold
                    uppercase
                    tracking-wide
                  "
                  style={{
                    color: DARK_BLUE,
                  }}
                >
                  Port Facilities
                </h2>

                <div
                  className="mt-3 h-[2px] w-full"
                  style={{
                    backgroundColor: YELLOW,
                  }}
                />

                <div className="mt-5 space-y-3">
                  {port.facilities.map((facility, index) => {
                    const Icon = getFacilityIcon(facility);

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <Icon
                          className="
                            w-4
                            h-4
                            mt-0.5
                            shrink-0
                          "
                          style={{
                            color: "#EF4444",
                          }}
                        />

                        <p
                          className="
                            text-sm
                            leading-5
                            text-slate-700
                          "
                        >
                          {facility}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  PORT SERVICES
              ================================================= */}

              <div className="p-6 md:p-7">
                <h2
                  className="
                    text-lg
                    font-extrabold
                    uppercase
                    tracking-wide
                  "
                  style={{
                    color: DARK_BLUE,
                  }}
                >
                  Port Services
                </h2>

                <div
                  className="mt-3 h-[2px] w-full"
                  style={{
                    backgroundColor: YELLOW,
                  }}
                />

                <div className="mt-5 space-y-3">
                  {port.services.map((service, index) => {
                    const Icon = getServiceIcon(service);

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <Icon
                          className="
                            w-4
                            h-4
                            mt-0.5
                            shrink-0
                          "
                          style={{
                            color: "#EF4444",
                          }}
                        />

                        <p
                          className="
                            text-sm
                            leading-5
                            text-slate-700
                          "
                        >
                          {service}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SECOND INFORMATION ROW
          ===================================================== */}

          <div
            className="
              mt-6
              grid
              lg:grid-cols-4
              gap-6
            "
          >

            {/* =================================================
                PORT RESTRICTIONS
            ================================================= */}

            <div
              className="
                lg:col-span-2
                bg-white
                border
                border-slate-200
                rounded-xl
                p-6
                md:p-7
                shadow-lg
              "
            >
              <h2
                className="
                  text-lg
                  font-extrabold
                  uppercase
                  tracking-wide
                "
                style={{
                  color: DARK_BLUE,
                }}
              >
                Port Restrictions
              </h2>

              <div
                className="mt-3 h-[2px] w-full"
                style={{
                  backgroundColor: YELLOW,
                }}
              />

              <div className="mt-5 space-y-3">
                {port.restrictions.map(
                  (restriction, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="
                          font-bold
                          text-sm
                          shrink-0
                        "
                        style={{
                          color: "#EF4444",
                        }}
                      >
                        ●
                      </span>

                      <p
                        className="
                          text-sm
                          leading-5
                          text-slate-600
                        "
                      >
                        {restriction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* =================================================
                NEARBY AIRPORT
            ================================================= */}

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-6
                md:p-7
                shadow-lg
              "
            >
              <h2
                className="
                  text-lg
                  font-extrabold
                  uppercase
                  tracking-wide
                "
                style={{
                  color: DARK_BLUE,
                }}
              >
                Nearby Airport
              </h2>

              <div
                className="mt-3 h-[2px] w-full"
                style={{
                  backgroundColor: YELLOW,
                }}
              />

              <div className="mt-5 flex gap-4">
                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                  style={{
                    backgroundColor: DARK_BLUE,
                  }}
                >
                  <Plane
                    className="w-5 h-5"
                    style={{
                      color: YELLOW,
                    }}
                  />
                </div>

                <div>
                  <h3
                    className="
                      font-bold
                      text-sm
                      leading-5
                    "
                    style={{
                      color: DARK_BLUE,
                    }}
                  >
                    {port.airport.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-5
                      text-slate-600
                    "
                  >
                    {port.airport.distance}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                NEARBY HOTELS
            ================================================= */}

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-6
                md:p-7
                shadow-lg
              "
            >
              <h2
                className="
                  text-lg
                  font-extrabold
                  uppercase
                  tracking-wide
                "
                style={{
                  color: DARK_BLUE,
                }}
              >
                Nearby Hotels
              </h2>

              <div
                className="mt-3 h-[2px] w-full"
                style={{
                  backgroundColor: YELLOW,
                }}
              />

              <div className="mt-5 space-y-3">
                {port.hotels.map((hotel, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="
                        w-7
                        h-7
                        rounded
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                      style={{
                        backgroundColor: DARK_BLUE,
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{
                          color: YELLOW,
                        }}
                      >
                        ★
                      </span>
                    </div>

                    <p
                      className="
                        text-sm
                        leading-5
                        text-slate-600
                      "
                    >
                      {hotel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              MAP
          ===================================================== */}

          <div
            className="
              mt-6
              bg-white
              border
              border-slate-200
              rounded-xl
              overflow-hidden
              shadow-lg
            "
          >
            <div className="p-6 md:p-7">
              <h2
                className="
                  text-lg
                  font-extrabold
                  uppercase
                  tracking-wide
                "
                style={{
                  color: DARK_BLUE,
                }}
              >
                {port.map.title}
              </h2>

              <div
                className="mt-3 h-[2px] w-full"
                style={{
                  backgroundColor: YELLOW,
                }}
              />
            </div>

            <div className="w-full h-[420px]">
              <iframe
                src={port.map.url}
                title={port.map.title}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="text-white"
        style={{
          backgroundColor: DARK_BLUE,
        }}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-10
            md:py-12
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          <div className="flex items-center gap-5">
            <div
              className="
                w-16
                h-16
                rounded-full
                border-2
                flex
                items-center
                justify-center
                shrink-0
              "
              style={{
                borderColor: YELLOW,
              }}
            >
              <HeadsetIcon />
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-extrabold
                "
              >
                {port.cta.title}
              </h2>

              <p
                className="
                  mt-2
                  max-w-3xl
                  text-sm
                  md:text-base
                  leading-6
                  text-blue-100
                "
              >
                {port.cta.description}
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              font-extrabold
              px-7
              py-4
              rounded-lg
              transition
              duration-300
              whitespace-nowrap
              shadow-lg
            "
            style={{
              backgroundColor: YELLOW,
              color: DARK_BLUE,
            }}
          >
            Request Assistance

            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL HEADSET ICON
========================================================= */

function HeadsetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-8 h-8"
      style={{
        color: YELLOW,
      }}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 13a8 8 0 0 1 16 0"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 19c0 1.1-.9 2-2 2h-2"
      />
    </svg>
  );
}
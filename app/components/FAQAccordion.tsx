"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQ[];
};

export default function FAQAccordion({
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="my-16 rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">

      <h2 className="flex items-center gap-3 bg-blue-900 px-8 py-5 text-2xl font-bold text-white">
        <>
  <span className="text-3xl">❓</span>
  Frequently Asked Questions
</>
      </h2>

      <div className="space-y-4 p-8">

        {items.map((item, index) => {

          const isOpen = openIndex === index;
          const icon = isOpen ? "−" : "+";

          return (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
            >

              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between bg-white px-6 py-5 text-left transition-colors duration-300 hover:bg-blue-50"
              >

                <span className="text-lg font-bold text-blue-900">

                  {item.question}

                </span>

                <span className="text-3xl font-light text-yellow-500">

                  {icon}

                </span>

              </button>

              {isOpen && (

                <div className="border-t border-gray-100 bg-slate-50 px-6 py-6 leading-8 text-gray-700">

                  {item.answer}

                </div>

              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}
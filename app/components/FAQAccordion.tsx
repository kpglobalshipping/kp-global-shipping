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
    <section className="my-16">

      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">

        {items.map((item, index) => {

          const isOpen = openIndex === index;

          return (

            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full text-left px-6 py-5 bg-white hover:bg-gray-50 flex justify-between items-center"
              >

                <span className="font-semibold text-blue-900">

                  {item.question}

                </span>

                <span className="text-2xl">

                  {isOpen ? "−" : "+"}

                </span>

              </button>

              {isOpen && (

                <div className="px-6 pb-6 text-gray-700 leading-8">

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
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type ServiceFAQProps = {
  title: string;
  subtitle: string;
  faqs: FAQ[];
};

export default function ServiceFAQ({
  title,
  subtitle,
  faqs,
}: ServiceFAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-2xl">
            {subtitle}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            {title}
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-lg font-bold text-blue-900">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="text-blue-900" />
                ) : (
                  <ChevronDown className="text-blue-900" />
                )}

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
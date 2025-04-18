"use client";
import React from "react";
import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react"; // Assuming you have lucide-react installed for icons

interface FAQ {
  question: string;
  answer: string;
}

const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <ul>
      {faqs.map((faq, index) => (
        <AccordionItem
          faq={faq}
          key={index}
          selected={selected}
          setSelected={setSelected}
          index={index}
        />
      ))}
    </ul>
  );
};

export default FAQAccordion;

interface AccordionItemProps {
  faq: FAQ;
  selected: number | null;
  setSelected: (index: number | null) => void;
  index: number;
}

const AccordionItem = ({
  faq,
  selected,
  setSelected,
  index,
}: AccordionItemProps) => {
  const isOpen = selected === index;
  const Icon = isOpen ? Minus : Plus; // Assuming you have Plus and Minus icons imported

  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full lg:px-[12%] py-5 scroll-mt-20">
      <li className="border-b pb-5">
        <button
          onClick={() => setSelected(isOpen ? null : index)}
          className={`w-full flex justify-between lg:items-center hover:text-[#70B5C0] ${
            isOpen ? "text-[#70B5C0]" : "text-black"
          }`}
        >
          <span className="font-Inter text-xl pb-2 text-left">
            {" "}
            {faq.question}
          </span>
          <Icon size={20} />
        </button>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            height: isOpen ? contentRef.current?.scrollHeight : 0,
          }}
        >
          <div
            ref={contentRef}
            className="pb-5 dark:text-black font-Inter "
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          ></div>
        </div>
      </li>
    </div>
  );
};

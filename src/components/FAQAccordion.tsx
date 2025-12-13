'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQAccordionProps {
  question: string
  answer: string
}

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-neutral-900 pr-4">
          {question}
        </h3>
        <span className="flex-shrink-0 mt-1">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-neutral-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-neutral-100">
          <p className="text-neutral-600 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

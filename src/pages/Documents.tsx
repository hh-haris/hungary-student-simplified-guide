// Update the FAQs section to remove the technical tab
<section className="mb-8">
  <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {generalFaqs.map((faq, index) => (
      <ExpandableCard key={index} title={faq.question} initialExpanded={index === 0}>
        <p className="text-gray-700">{faq.answer}</p>
      </ExpandableCard>
    ))}
  </div>
</section>
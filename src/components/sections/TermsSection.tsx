import React from 'react';

const termsandconditions = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    description:
      'By accessing and using our services, you agree to comply with and be bound by these terms and conditions.',
  },
  {
    id: 2,
    title: 'Service Description',
    description:
      'We provide web design, hosting, SEO optimization, and AI integration services as described on our website.',
  },
  {
    id: 3,
    title: 'User Responsibilities',
    description:
      'You are responsible for providing accurate information and complying with all applicable laws while using our services.',
  },
  {
    id: 4,
    title: 'Payment Terms',
    description:
      'Payments for our services are due as per the agreed-upon schedule. Late payments may incur additional fees.',
  },
  {
    id: 5,
    title: 'Intellectual Property',
    description:
      'All content and materials provided by us are protected by intellectual property laws. You may not use them without our permission.',
  },
  {
    id: 6,
    title: 'Limitation of Liability',
    description:
      'We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.',
  },
  {
    id: 7,
    title: 'Termination',
    description:
      'We reserve the right to terminate or suspend your access to our services at any time without prior notice.',
  },
  {
    id: 8,
    title: 'Governing Law',
    description:
      'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate.',
  },
  {
    id: 9,
    title: 'Changes to Terms',
    description:
      'We may update these terms and conditions from time to time. Continued use of our services constitutes acceptance of the updated terms.',
  }
];

const TermsSection = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-12 px-4 py-10">
      {termsandconditions.map((item) => (
        <div key={item.id} className="mb-8">
          <h2 className="font-bold text-lg mb-1 text-foreground">
            {`${item.id}. ${item.title}`}
          </h2>
          <p className="text-sky text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TermsSection;

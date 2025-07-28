import React from 'react';
import TestimonialCard from './testimonials/TestimonialCard';

function TestimonailCards() {
  const testimonials = [
    {
      title: "Checkatrade review",
      description:
        "M G Electrics Ltd has been a member of Checkatrade for 4 years. We would like to thank them for their loyalty and the quality service they provide to customers in Epsom specialising in Electrician services.",
    },
    {
      title: "Checkatrade review",
      description:
        "I found the Electrician to be polite, helpful and excellent at his job. The work was carried out to the agreed standard and everything was left clean. The electrician left the job very tidy indeed as everything as requested.",
    },
    {
      title: "Checkatrade review",
      description:
        "A very professional competent and reliable service offered by Mark and his team. Friendly and easy to do business with. I would recommend their service.",
    },
    {
      title: "Checkatrade review",
      description:
        "Lovely people and in excellent work. The work was outstanding from start to finish, they were incredibly tidy and the attention to detail was also really appreciated. I would highly recommend Mark and his team.",
    },
    {
      title: "Checkatrade review",
      description:
        "Mark and the guys were polite and respectful. Very pleased with the standard of their work. Definitely would recommend him.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-4 md:px-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          title={testimonial.title}
          description={testimonial.description}
        />
      ))}
    </div>
  );
}

export default TestimonailCards;

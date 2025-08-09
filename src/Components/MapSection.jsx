'use client';
import MapImage from '../assets/images/Img34.png';
import bg from '../assets/images/Bg13.png';

export default function MapSection() {
  return (
    <section
      className="w-full px-4 md:px-10 lg:px-20 flex justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="rounded-[20px] overflow-hidden shadow-lg w-full max-w-[1260px] mb-20">
      <iframe  src="https://www.google.com/maps?q=389a+London+Rd,+St.+Leonards-on-Sea+TN37+6PA,+UK&z=15&output=embed"
          width="100%"
          height="550"
          style={{ border: 0, borderRadius: 20 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Custom Location Map"></iframe>
      </div>
    </section>
  );
}

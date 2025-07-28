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
        <img
          src={MapImage}
          alt="Map Section"
          className="w-full h-auto lg:w-[1260px] lg:h-[670px] object-cover rounded-[20px]"
        />
      </div>
    </section>
  );
}

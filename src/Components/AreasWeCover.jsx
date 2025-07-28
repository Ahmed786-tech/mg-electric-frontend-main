'use client';
import LocationIcon from '@/assets/svgs/Icon32.svg';
import Locationimg1 from '../assets/images/Img22.png';
import Locationimg2 from '../assets/images/Img23.png';
import Locationimg3 from '../assets/images/Img24.png';
import bg from '../assets/images/bg2.png';

const areas = [
  {
    name: 'Surrey',
    image: Locationimg1,
  },
  {
    name: 'London',
    image: Locationimg2,
  },
  {
    name: 'Sussex',
    image: Locationimg3,
  },
];

export default function AreasWeCover() {
  return (
    <section
      className="bg-cover bg-center py-16 px-4 md:px-20 text-white text-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Heading */}
      <p className="text-[#01B8FF] text-[20px] font-normal mb-2 font-andika">
        Areas We Cover
      </p>
      <h2 className="text-[32px] md:text-4xl font-bold font-andika mb-12 leading-tight">
        Serving Surrey, London And Sussex
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {areas.map((area, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <img
                src={area.image}
                alt={area.name}
                className="w-[403px] h-[311px] object-cover rounded-[20px] max-w-full"
              />
            </div>
            <div
              className="bg-[#001A33] text-white px-6 py-4 rounded-[10px] w-[290px] h-[85px] mt-[-24px] shadow-lg relative z-10 flex items-center justify-center gap-2 font-normal text-[30px] font-andika 
              sm:ml-[55px] ml-0"
              style={{ boxShadow: '0px 7px 4px 0px #105993B2' }}
            >
              <img src={LocationIcon} alt="icon" className="w-[44px] h-[44px]" />
              {area.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

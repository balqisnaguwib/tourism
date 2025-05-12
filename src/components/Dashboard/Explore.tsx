// Next, React, Tw
import Image from 'next/image';

// Icon
import { Icon } from '@iconify/react/dist/iconify.js';

const Explore = () => {
  const FOR_YOU_DATA = [
    {
      image:
        'https://lh3.googleusercontent.com/p/AF1QipN8jVPkDCE_6xPUotxNuDvEtirrGYzmKsmGk6F0=w408-h306-k-no',
      title: 'Nasi Lemak Wanjo Kg Bharu',
    },
    {
      image:
        'https://lh3.googleusercontent.com/p/AF1QipN8jVPkDCE_6xPUotxNuDvEtirrGYzmKsmGk6F0=w408-h306-k-no',
      title: 'Nasi Lemak Wanjo Kg Bharu',
    },
    {
      image:
        'https://lh3.googleusercontent.com/p/AF1QipN8jVPkDCE_6xPUotxNuDvEtirrGYzmKsmGk6F0=w408-h306-k-no',
      title: 'Nasi Lemak Wanjo Kg Bharu',
    },
  ];
  return (
    <div className="flex h-full flex-col justify-between px-6 py-16">
      <div className="flex h-1/3 flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-bold">
            For you in{' '}
            <span className="flex items-center text-[#ff5e00]">
              <Icon icon="bytesize:location" className="text-[20px]" />
              Kuala Lumpur
            </span>
          </p>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            <Icon icon="mdi:compass" className="text-gray-600" />
            Explore
          </button>
        </div>
        <div className="flex flex-grow justify-between gap-3">
          {FOR_YOU_DATA?.map((o: { image: string; title: string }, index) => (
            <div
              key={index}
              className="group relative w-1/3 cursor-pointer overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <Image
                src={o.image}
                alt={o.title}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="absolute bottom-3 left-3 z-20 text-sm font-medium text-white drop-shadow-md">
                {o.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex h-1/3 flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-bold">Jump back in</p>
          <button
            type="button"
            className="cursor-pointer rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            View all
          </button>
        </div>
        <div className="flex flex-grow justify-between gap-3">
          {FOR_YOU_DATA?.map((o: { image: string; title: string }, index) => (
            <div
              key={index}
              className="group relative w-1/3 cursor-pointer overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
              <Image
                src={o.image}
                alt={o.title}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="absolute bottom-3 left-3 z-20 text-sm font-medium text-white drop-shadow-md">
                {o.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex h-1/3 flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-bold">Get inspired</p>
          <button
            type="button"
            className="cursor-pointer rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            See all
          </button>
        </div>
        <div className="flex flex-grow justify-between gap-3">
          {FOR_YOU_DATA?.map((o: { image: string; title: string }, index) => (
            <div
              key={index}
              className="group relative w-1/3 cursor-pointer overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
              <Image
                src={o.image}
                alt={o.title}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="absolute bottom-3 left-3 z-20 text-sm font-medium text-white drop-shadow-md">
                {o.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;


import Hero from '@/components/Hero/hero';

const Page = () => {
  const images = [
    { src: '/banner1.jpg', alt: 'Image 1' },
    { src: '/banner2.jpg', alt: 'Image 2' },
    { src: '/banner3.jpg', alt: 'Image 3' },
    { src: '/banner7.webp', alt: 'Image 4' },
  ];

  return (
    <div>
      <Hero images={images} height={500}  width={1200} /> {/* Removed width prop as it's not needed */}
    </div>
  );
};

export default Page;
  
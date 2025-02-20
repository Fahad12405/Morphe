import Hero from '@/components/Hero/hero';

const Page = () => {
  const images = [
    { src: '/banner1.jpg', alt: 'Image 1' },
    { src: '/banner2.jpg', alt: 'Image 2' },
    { src: '/banner3.jpg', alt: 'Image 3' },
    { src: '/banner4.jpg', alt: 'Image 4' },
  ];

  return (
    <div>
      <Hero images={images} height={500} width={1200} /> {/* Remove "px" */}
    </div>
  );
};

export default Page;

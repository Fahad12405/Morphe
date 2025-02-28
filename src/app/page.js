import Hero from "@/components/Hero/page";
import ProductCard from "@/components/ProductCards/productcard";
import ProductCategory from "@/components/ProductCategory/ProductCategory";
import Banner from "@/components/Banner/banner";
import Poster from "@/components/Poster/Poster";
import CostumerReview from "@/components/CostumerReview/CostumerReview";


const category = [
  '/1.webp',
  '/2.avif',
  '/3.avif',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg'
];

export const metadata = {
  title: 'Home',
  description: 'This is the Home page'
}

export default function Home() {
  return (
    <div className="container mx-auto">

      <Hero />
      <ProductCategory />
      <ProductCard />
      <Banner category={category} />
      <ProductCard />
      <Poster backgroundImage="poster.webp" />
      <ProductCard />
      <CostumerReview />

    </div>
  );
}


'use client';
import Image from 'next/image';

const categories = [
    { name: 'Cleanser & Face Wash', img: '/category1.webp' },
    { name: 'Cream & Lotion', img: '/category2.avif' },
    { name: 'Hair Gel & Mousse', img: '/category3.webp  ' },
    { name: 'Serum & Toners', img: '/category4.webp' },
    { name: 'Body Care', img: '/category5.webp' },
    { name: 'Eye Care', img: '/category6.png' },
    { name: 'Hand & Foot Care', img: '/category7.webp' },
    { name: 'Face Mask & Sheets', img: '/category8.avif' },
    { name: 'Shampoo & Conditioner', img: '/category9.webp' },
    { name: 'Lip Tints', img: '/category10.avif' },
];

const ProductCategory = () => {
    return (
        <div className="container mx-auto p-4 mt-12">
            <h2
                className="text-4xl font-bold mb-1 text-center"
                style={{
                    fontFamily: "'Garamond', serif",
                    letterSpacing: '2px',
                    color: '#2C3E50',
                    textTransform: 'uppercase',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                Product Categories
            </h2>
    
            <p
                className="text-gray-700 text-center mb-8"
                style={{
                    fontFamily: "'Lora', serif",
                    color: '#7F8C8D',
                }}
            >
                Discover our Products
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-full h-48 sm:h-52 md:h-48 lg:h-52 relative rounded-lg overflow-hidden">
                            <Image
                                src={category.img}
                                alt={category.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                        <p
                            style={{
                                fontFamily: "'Garamond', serif",
                                letterSpacing: '2px',
                                color: '#2C3E50',
                                textTransform: 'uppercase',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            }}
                            className="text-sm font-semibold text-center mt-2 mb-4 sm:mb-10"
                        >
                            {category.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default ProductCategory;

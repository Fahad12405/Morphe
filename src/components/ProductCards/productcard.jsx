"use client";
import { useState } from "react";
import { FaShoppingCart, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductCard = () => {
    const products = [
        {
            id: 1,
            title: "Neutrogena TGel Therapeutic Shampoo 250ml",
            price: "Rs.5,499.00",
            oldPrice: "Rs.8,900.00",
            discount: "38% Off",
            image: "https://thejade.pk/cdn/shop/products/jade-tea-tree-oil-facewash-743075.jpg?v=1738668133&width=600",
            rating: 4,
        },
        {
            id: 2,
            title: "Neutrogena Rapid Wrinkle Repair Retinol Pro+ 0.3% Night Cream",
            price: "Rs.8,500.00",
            oldPrice: "Rs.9,500.00",
            discount: "10% Off",
            image: "https://cdn.shopify.com/s/files/1/0616/1127/8554/files/7Z3A2557.png?v=1737376553",
            rating: 3,
        },
        {
            id: 3,
            title: "One Step Hot Air Brush (Dryer + Styler)",
            price: "Rs.3,100.00",
            oldPrice: "Rs.5,000.00",
            discount: "38% Off",
            image: "https://www.digimall.pk/cdn/shop/products/100ml_1200x1200.jpg",
            rating: 5,
        },
        {
            id: 4,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://harcheez.pk/wp-content/uploads/2022/08/dddddddddddd.jpg",
            rating: 3,
        },
        {
            id: 5,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://nazarjanssupermarket.com/cdn/shop/files/GoldenPearlMenPowerNeat_ClearFaceWash75ml_1_large.png?v=1730981721",
            rating: 3,
        },
        {
            id: 6,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://images-static.nykaa.com/media/catalog/product/6/b/6bde8428906143104563_7.jpg?tr=w-500",
            rating: 3,
        }, {
            id: 7,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://chiltanpure.com/cdn/shop/products/vitamin-c-face-wash-reduces-dullness-boosts-collagen-brightens-restores-skin-729788_grande.png?v=1699915216",
            rating: 3,
        },
        {
            id: 8,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://eveline.pk/eveline/wp-content/uploads/2020/05/4d-facial-washgel-200.png",
            rating: 3,
        },
        {
            id: 9,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://www.ics-brands.com/cdn/shop/files/Mec_Whitening_Flawless_White_Face_Wash_100ml_2.png?v=1728742093&width=1445",
            rating: 3,

        },
        {
            id: 10,
            title: "Neutrogena Cellular Boost Anti-Ageing Night Cream 50ml",
            price: "Rs.2,600.00",
            oldPrice: "Rs.3,500.00",
            discount: "25% Off",
            image: "https://assets.unileversolutions.com/v1/60695390.png",
            rating: 3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    const handleNext = () => {
        if (currentIndex + 1 < products.length - itemsPerPage + 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="w-full px-5 mt-12 overflow-hidden">
            <h2
                className="text-4xl font-bold mb-1 text-center"
                style={{
                    fontFamily: "'Garamond', serif",
                    letterSpacing: '2px',
                    color: '#2C3E50',
                    textTransform: 'uppercase',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                }}
            >
                BEST PRICE OFFER
            </h2>

            <p
                className="text-gray-700 text-center mb-8"
                style={{
                    fontFamily: "'Lora', serif",
                    color: '#7F8C8D'
                }}
            >
                Trending Now
            </p>

            <div className="relative w-full">
                <div className="flex space-x-4 transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-1/5 min-w-[250px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    {product.discount}
                                </span>
                            </div>
                            <div className="mt-4 flex flex-col flex-grow">
                                <h3 className="text-sm font-semibold text-gray-800">{product.title}</h3>
                                <p className="text-sm font-bold text-gray-700">
                                    {product.price} <span className="text-gray-400 line-through text-xs">{product.oldPrice}</span>
                                </p>
                                <div className="flex items-center mt-2">
                                    <div className="flex text-orange-500">
                                        {"★".repeat(product.rating)}
                                        {"☆".repeat(5 - product.rating)}
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 bg-black text-white flex justify-center items-center py-2 rounded-md text-sm font-semibold">
                                <FaShoppingCart className="mr-2" />
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    disabled={currentIndex === 0}
                >
                    <FaArrowLeft />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    disabled={currentIndex >= products.length - itemsPerPage}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
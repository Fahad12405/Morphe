"use client";

import { useState, useRef } from "react";
import { ImagePlus, X } from "lucide-react";
import TextInput from "@/components/Inputs/TextInput";
import { ButtonPrimary } from "@/components/Buttons/index";
import CheckboxInput from "../Inputs/CheckboxInput";
import { ApiService, localStorageHandler } from "@/utils/index";

export default function AddProductForm() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        brand: "",
        productPrice: "",
        discountPrice: "",
        sku: "",
        stock: "",
        unit: "pcs",
        video: "",
        shippingCost: "",
        shippingTime: "",
        tags: "",
        warranty: "",
        images: [],
        isPublished: true,
    });

    const token = localStorageHandler.get("user")?.token;

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZWMxMTBjZmZlNWU3YjQwZTU2ZjgiLCJuYW1lIjoidG91c2VlZiIsImlhdCI6MTc0MDQzNDQ1MSwiZXhwIjoxNzQxMDM5MjUxfQ.93HM66x7K_k99l4L966CQijJhbkLl66FcV9B--y4LZM"

    const fileInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Number(product.productPrice) <= Number(product.discountPrice)) {
            alert("Product price should be greater than discount price");
            return;
        }

        try {
            const data = new FormData();
            for (const key in product) {
                if (key === "images") {
                    product.images.forEach((file) => data.append("images", file));
                } else {
                    data.append(key, product[key]);
                }
            }

            const res = await ApiService("POST", "product/add", data, token);

            setProduct({
                name: "",
                description: "",
                category: "",
                brand: "",
                productPrice: "",
                discountPrice: "",
                sku: "",
                stock: "",
                unit: "pcs",
                video: "",
                shippingCost: "",
                shippingTime: "",
                tags: "",
                warranty: "",
                images: [],
                isPublished: true,
            });
        } catch (error) {
            console.log(error)
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setProduct({ ...product, images: [...product.images, ...files] });
    };

    const removeImage = (index) => {
        const updatedImages = product.images.filter((_, i) => i !== index);
        setProduct({ ...product, images: updatedImages });
    };

    const inputsFields = [
        { label: "Product Name", name: "name" },
        { label: "Description", name: "description", type: "text" },
        { label: "Category", name: "category" },
        { label: "Brand", name: "brand" },
        { label: "Product Price", name: "productPrice", type: "number" },
        { label: "Discount Price", name: "discountPrice", type: "number" },
        // { label: "SKU", name: "sku" },
        { label: "Stock", name: "stock", type: "number" },
        { label: "Unit", name: "unit" },
        { label: "Video (optional)", name: "video" },
        { label: "Shipping Cost", name: "shippingCost", type: "number" },
        { label: "Shipping Time", name: "shippingTime" },
        { label: "Warranty", name: "warranty" },
        { label: "Tags (comma separated)", name: "tags" },
    ];

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Add Product</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inputsFields.map((input) => (
                    <TextInput
                        key={input.name}
                        label={input.label}
                        name={input.name}
                        type={input.type || "text"}
                        value={product[input.name]}
                        onChange={(e) => setProduct({ ...product, [input.name]: e.target.value })}
                    />
                ))}
            </div>

            {/* Image Upload Section */}
            <div className="mt-6 flex flex-col items-center">
                {/* Hidden File Input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    name="images"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />

                {/* Custom Upload Button */}
                <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
                >
                    <ImagePlus className="w-5 h-5 text-blue-500" /> Upload Images
                </button>

                {/* Image Preview */}
                {product.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {product.images.map((file, index) => (
                            <div key={index} className="relative w-16 h-16">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Separate Checkbox at the Bottom */}
            <div className="mt-4">
                <CheckboxInput
                    label="Published"
                    name="isPublished"
                    checked={product.isPublished}
                    onChange={(e) => setProduct({ ...product, isPublished: e.target.checked })}
                />
            </div>

            <div className="mt-6">
                <ButtonPrimary title="Add Product" type="submit" className="w-full" />
            </div>
        </form>
    );
}

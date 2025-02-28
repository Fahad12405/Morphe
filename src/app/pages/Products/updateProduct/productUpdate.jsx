"use client";

import ProductForm from "@/components/Forms/updateProductForm";
import { LoaderProgress } from "@/components/Loader/Loader";
import ProductNotFound from "@/components/NotFound/prouduct-notFound";
import { ApiService, localStorageHandler } from "@/utils";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function ProductUpdate() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state add ki
    const [progress, setProgress] = useState(0);

    const fetchProduct = useCallback(async () => {
        try {
            setProgress(20);

            setProgress(50);
            const res = await ApiService("GET", `/product/get/${id}`);

            setProgress(80);
            // await new Promise((resolve) => setTimeout(resolve, 500));

            setProduct(res.data);
            setProgress(100);
        } catch (error) {
            console.error("Error fetching product:", error);
            setProduct({});
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchProduct()
    }, [id]);


    const updateProduct = async (data) => {
        try {
            const token = localStorageHandler.get("user")?.token;
            // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZWMxMTBjZmZlNWU3YjQwZTU2ZjgiLCJuYW1lIjoidG91c2VlZiIsImlhdCI6MTc0MDQzNDQ1MSwiZXhwIjoxNzQxMDM5MjUxfQ.93HM66x7K_k99l4L966CQijJhbkLl66FcV9B--y4LZM";
            const res = await ApiService("patch", `/product/update/${id}`, data, token);
            if (res.status === 1) {
                alert(res.message);
            }

        } catch (error) {
            console.error("Error updating product:", error);
        }
    };


    return (
        <div>

            {loading && (
                <div className="min-h-[90vh] flex justify-center items-center">
                    <LoaderProgress progress={progress} />
                </div>
            )}

            {product ?
                <>
                    <ProductForm product={product} onSubmit={updateProduct} />
                </>
                :
                <div className="min-h-[90vh] flex justify-center items-center">
                    <ProductNotFound />
                </div>}
        </div>
    );
}

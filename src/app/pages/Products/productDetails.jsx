'use client';

import Image from "next/image"
import { AspectRatio } from "@/components/shadcn-ui/aspect-ratio"
import { Button } from "@/components/shadcn-ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn-ui/card"
import { Separator } from "@/components/shadcn-ui/separator"
import { CircleFadingArrowUp, ShoppingCart, Star } from "lucide-react"
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ApiService } from "@/utils/index";
import { ButtonPrimaryWithIcon } from "@/components/Buttons";
import { LoaderProgress } from "@/components/Loader/Loader";

// const product = {
//     _id: "67bedbaa5c12c2268aeb3445",
//     name: "Dior Sauvage The Cleanser",
//     description:
//         "Dior Sauvage The Cleanser is een zeer effectieve cleanser voor mannen die onzuiverheden en overtollige olie op milde wijze verwijdert. Het is verrijkt met cactusextract en reinigt grondig, terwijl de mannelijke geur van Sauvage een verfrissende noot achterlaat. Ideaal voor je dagelijkse huidverzorgingsroutine voor een gerevitaliseerde en gevoede huid.",
//     category: "face wash",
//     brand: "Dior",
//     price: 1910,
//     productPrice: 1999,
//     discountPrice: 89,
//     stock: 100,
//     unit: "pcs",
//     sku: "",
//     images: [
//         {
//             url: "https://res.cloudinary.com/dv3pq6g96/image/upload/v1740514521/Product%20Images/bcurlismitxcgj9tqjgs.webp",
//             public_id: "Product Images/bcurlismitxcgj9tqjgs",
//             _id: "67bedbaa5c12c2268aeb3446",
//         },
//         {
//             url: "https://res.cloudinary.com/dv3pq6g96/image/upload/v1740514521/Product%20Images/h2whwutx6coxitcsufzj.webp",
//             public_id: "Product Images/h2whwutx6coxitcsufzj",
//             _id: "67bedbaa5c12c2268aeb3447",
//         },
//         {
//             url: "https://res.cloudinary.com/dv3pq6g96/image/upload/v1740514521/Product%20Images/e2kebi6ibrs5qsqh1ktg.webp",
//             public_id: "Product Images/e2kebi6ibrs5qsqh1ktg",
//             _id: "67bedbaa5c12c2268aeb3448",
//         },
//         {
//             url: "https://res.cloudinary.com/dv3pq6g96/image/upload/v1740514521/Product%20Images/xhlpxckre5k4aung8ksa.webp",
//             public_id: "Product Images/xhlpxckre5k4aung8ksa",
//             _id: "67bedbaa5c12c2268aeb3449",
//         },
//     ],
//     shippingCost: 99,
//     shippingTime: "1 days",
//     warranty: "no waarenty",
// }

export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchProduct = useCallback(async () => {
        try {
            setProgress(20);
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
    }, [])

    return (
        <div className="container mx-auto px-4 py-10">

            {loading && (
                <div className="min-h-[90vh] flex justify-center items-center">
                    <LoaderProgress progress={progress} />
                </div>
            )}

            {!loading &&
                <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6 items-center ">
                        <div className="space-y-4">
                            <AspectRatio ratio={4 / 3}> 
                                <Image
                                    src={product.images?.[0].url || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="rounded-md object-scale-down"
                                />
                            </AspectRatio>
                            <div className="grid grid-cols-4 gap-2">
                                {product.images?.slice(1).map((image, index) => (
                                    <AspectRatio key={image._id} ratio={1}>
                                        <Image
                                            src={image.url || "/placeholder.svg"}
                                            alt={`${product.name} - Image ${index + 2}`}
                                            fill
                                            className="rounded-md object-cover"
                                        />
                                    </AspectRatio>
                                ))}
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="flex items-center ">
                                <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                                <span className="text-sm font-medium">
                                    {product.averageRating?.toFixed(1)} ({product.totalReviews} reviews)
                                </span>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">{product.name}</CardTitle>
                                <CardDescription className="text-lg">{product.brand}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="text-2xl font-bold">PKR: {product.price?.toFixed(2)}</div>
                                    {
                                        product.discountPrice &&
                                        <>
                                            <div className="text-sm text-muted-foreground line-through">PKR: {product.productPrice?.toFixed(2)}</div>
                                            <div className="text-sm text-green-600 font-semibold">Save PKR: {product.discountPrice?.toFixed(2)}</div>
                                        </>
                                    }
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Description</h3>
                                    <p className="text-sm text-muted-foreground">{product.description}</p>
                                </div>
                                <Separator />
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-semibold">Category : </span> {product.category}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Stock : </span> {product.stock} {product.unit}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Shipping : </span> PKR:{product.shippingCost?.toFixed(2)}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Delivery Time : </span> {product.shippingTime}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Warranty : </span> {product.warranty}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Published : </span> {product.isPublished ? "Yes" : "No"}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Featured Product : </span> {product.isFeatured ? "Yes" : "No"}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <ButtonPrimaryWithIcon
                                    title="Update Product"
                                    icon={<CircleFadingArrowUp />}
                                    className={`w-full`}
                                />
                                {/* <Button className="w-full">
                                <CircleFadingArrowUp /> Update Product
                            </Button> */}
                            </CardFooter>
                        </div>
                    </div>
                </Card>}
        </div>
    )
}


import ProductUpdate from "@/app/pages/Products/updateProduct/productUpdate";

export const metadata = {
    title: "Update Product",
    layout: "admin",
};
function page() {

    return (
        <div className="min-h-screen">
            <ProductUpdate />
        </div>
    )
}

export default page

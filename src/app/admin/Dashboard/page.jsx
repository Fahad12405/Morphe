
import AdminHome from "@/app/pages/AdminHomePage";

export const metadata = {
    title: "Admin Dashboard",
    layout: "admin",
};


export default function page() {

    return (
        <div>
            <AdminHome />
        </div>
    )
}



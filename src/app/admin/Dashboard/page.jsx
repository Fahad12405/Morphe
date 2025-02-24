"use client"
import AddProducForm from '@/components/Forms/addProductForm';
import AdminMenu from '@/components/menubar/adminMenu'


export default function page() {

    const handleSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className='min-h-screen container mx-auto'>
            <AdminMenu />
            <AddProducForm />
        </div>
    )
}



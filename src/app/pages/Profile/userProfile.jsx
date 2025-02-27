'use client'

import { ButtonOutlined } from '@/components/Buttons/index'
import { localStorageHandler } from '@/utils';
import React from 'react'

export default function UserProfile() {

    const handleSubmit = () => {
        console.log("chal gya")
        const data = localStorageHandler.remove("user");

        if (!localStorageHandler.get("user")) {
            window.location.href = "/Login";
        } else {
            console.error("User data remove nahi hua!");
        }

    }

    return (
        <div className='min-h-screen flex items-center justify-center '>
            <ButtonOutlined title="LogOut" onButtonClick={handleSubmit} />
        </div>
    )
}



"use client";

import { Label } from "@/components/shadcn-ui/label";

export default function TextInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    className
}) {
    return (
        <div className="flex flex-col">
            {label && <Label htmlFor={name}>{label}</Label>}

            <input
                id={name}
                type={type}
                name={name}
                placeholder={label ? `Enter ${label}` : `Enter ${name}`}
                className={`${className}  flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-black mt-2`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
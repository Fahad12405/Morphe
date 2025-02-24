import React from "react";
import { Button } from "@components/shadcn-ui/button";

export default function ButtonPrimary({ title = "Button", onClick, className, ...props }) {
    return (
        <Button
            {...props}
            variant="default"
            className={`bg-black text-white hover:bg-white hover:border hover:border-black hover:text-black ${className}`}
            onClick={onClick ? onClick : undefined}
        >
            {title}
        </Button>
    );
}

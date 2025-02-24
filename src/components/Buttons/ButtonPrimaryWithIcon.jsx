import React from "react";
import { Button } from "@components/shadcn-ui/button";

export default function ButtonPrimaryWithIcon({ title = "Button", icon: Icon, iconPosition = "left", ...props }) {
    return (
        <Button
            {...props}
            variant="default"
            className="bg-black text-white hover:bg-white hover:border hover:border-black hover:text-black flex items-center gap-2"
        >
            {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
            {title}
            {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
        </Button>
    );
}
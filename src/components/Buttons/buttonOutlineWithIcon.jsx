import React from "react";
import { Button } from "@/components/shadcn-ui/button";

export default function ButtonOutlinedWithIcon({ title = "Button", icon: Icon, iconPosition = "left", ...props }) {
    return (
        <Button
            {...props}
            variant="outline"
            className="border border-black text-black hover:bg-black hover:text-white flex items-center gap-2"
        >
            {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
            {title}
            {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
        </Button>
    );
}
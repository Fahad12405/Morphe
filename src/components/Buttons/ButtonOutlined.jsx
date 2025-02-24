import React from "react";
import { Button } from "@/components/shadcn-ui/button";

export default function ButtonOutlined({ title = "Button", ...props }) {
  return (
    <Button
      {...props}
      variant="outline"
      className="border border-black text-black hover:bg-black hover:text-white"
    >
      {title}

    </Button>

  )
}
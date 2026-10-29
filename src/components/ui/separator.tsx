"use client";

import * as React from "react";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive>
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <SeparatorPrimitive
    ref={ref}
    aria-hidden="true"
    orientation={orientation}
    className={(state) =>
      cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        typeof className === "function" ? className(state) : className,
      )
    }
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.displayName;

export { Separator };

"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup> &
  Pick<
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>,
    "side" | "sideOffset" | "align" | "alignOffset"
  >;

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    { className, side = "top", sideOffset = 4, align = "center", alignOffset = 0, ...props },
    ref,
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="z-50"
      >
        <TooltipPrimitive.Popup
          ref={ref}
          className={(state) =>
            cn(
              "relative origin-[var(--transform-origin)] rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground transition-[transform,opacity] duration-150 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 motion-reduce:transition-none",
              typeof className === "function" ? className(state) : className,
            )
          }
          {...props}
        />
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = "TooltipContent";

const TooltipArrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, children, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={(state) =>
      cn(
        "fill-primary data-[side=top]:-bottom-1 data-[side=bottom]:-top-1 data-[side=bottom]:rotate-180 data-[side=left]:-right-1.5 data-[side=left]:-rotate-90 data-[side=right]:-left-1.5 data-[side=right]:rotate-90",
        typeof className === "function" ? className(state) : className,
      )
    }
    {...props}
  >
    {children ?? (
      <svg width="10" height="5" viewBox="0 0 10 5" aria-hidden="true">
        <path d="M0 0h10L5 5Z" />
      </svg>
    )}
  </TooltipPrimitive.Arrow>
));
TooltipArrow.displayName = "TooltipArrow";

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow };

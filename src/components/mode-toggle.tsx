import type * as React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      {...props}
      aria-label="Toggle theme"
      type="button"
      variant="link"
      size="icon"
      className={className}
      onClick={(event) => {
        props.onClick?.(event);
        if (!event.defaultPrevented) {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      }}
    >
      <SunIcon className="h-full w-full" />
      <MoonIcon className="hidden h-full w-full" />
    </Button>
  );
}

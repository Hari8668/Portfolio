"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme === "dark" ? "dark" : "light"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#27272c] group-[.toaster]:text-[#00FF99] group-[.toaster]:border-[#00FF99] group-[.toaster]:shadow-lg rounded-lg",
          description:
            "group-[.toast]:text-[#00FF99] dark:group-[.toast]:text-[#00FF99]",
          actionButton:
            "group-[.toast]:bg-[#00FF99] group-[.toast]:text-[#27272c] dark:group-[.toast]:bg-[#00FF99] dark:group-[.toast]:text-[#27272c]",
          cancelButton:
            "group-[.toast]:bg-gray-800 group-[.toast]:text-gray-300 dark:group-[.toast]:bg-gray-700 dark:group-[.toast]:text-gray-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

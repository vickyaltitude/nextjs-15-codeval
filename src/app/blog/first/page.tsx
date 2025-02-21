"use client";
import { useTheme } from "@/components/ThemeProvider";

export default function FirstBlog() {
  const useDisplayTheme = useTheme();
  return (
    <h3 style={{ color: useDisplayTheme.color.secondary }}>
      This is first Blog
    </h3>
  );
}

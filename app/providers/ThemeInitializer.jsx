
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeTheme } from "../redux/slices/themeSlice";

export default function ThemeInitializer() {
  const dispatch = useDispatch();
  const { mode, hydrated } = useSelector((state) => state.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    dispatch(
      initializeTheme(savedTheme === "dark" ? "dark" : "light")
    );
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated) return;

    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("portfolio-theme", mode);
  }, [mode, hydrated]);

  return null;
}

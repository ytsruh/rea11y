import { writable } from "svelte/store";
import { browser } from "$app/env";

const getDefaultTheme = () => {
  if (browser) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
};

// Initial theme config from current state
export const theme = writable(
  //Check if theme exists in Storage & use if available. If not available then use default/system settings
  browser && localStorage.getItem("theme") ? localStorage.getItem("theme") : getDefaultTheme()
);

//Update the theme in local storage on change
theme.subscribe((value) => {
  if (browser && localStorage.getItem("theme")) {
    //If a theme exists in local storage then toggle the value
    localStorage.setItem("theme", value === "dark" ? "dark" : "light");
  } else if (browser) {
    //If no theme exists in local storage then set based on system settings
    localStorage.setItem("theme", getDefaultTheme());
  }
});

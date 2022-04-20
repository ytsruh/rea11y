import { writable } from "svelte/store";
import { browser } from "$app/env";

const storedUser = JSON.parse(browser && sessionStorage.getItem("user")) || null;

export const user = writable(browser && storedUser);

user.subscribe((value) => {
  browser && (sessionStorage.user = JSON.stringify(value));
});

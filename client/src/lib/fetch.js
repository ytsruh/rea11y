import { goto } from "$app/navigation";
import { alert } from "$lib/stores/alert";
const user = JSON.parse(sessionStorage.getItem("user"));
const baseURL = import.meta.env.VITE_BASE_URL;

async function send(method, path) {}

export async function get(endpoint) {
  const url = baseURL + endpoint;
  console.log(url);
  try {
    const res = await fetch(url, {
      headers: { Authorization: `token ${user.token}` },
    });
    const data = await res.json();
    // accountName = data.body.accountName;
    // userName = data.body.username;
    // name = data.body.name;
    // loading = false;
  } catch (err) {
    console.log(err);
    alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
    goto("/app");
  }
}

export function log() {
  console.log("logging stuff");
}

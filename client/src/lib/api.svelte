<script context="module">
  import { goto } from "$app/navigation";
  import { alert } from "$lib/stores/alert";
  import { browser } from "$app/env";
  let user = "";
  if (browser) {
    user = JSON.parse(sessionStorage.getItem("user"));
  }
  const baseURL = import.meta.env.VITE_BASE_URL;

  export async function get(endpoint) {
    const url = baseURL + endpoint;
    try {
      const res = await fetch(url, {
        headers: { Authorization: `token ${user.token}` },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }

  export async function put(endpoint, data) {
    const url = baseURL + endpoint;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `token ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await res.json();
      alert.set({ variant: "bg-primary", message: "Successfully updated" });
      goto("/app");
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }

  export async function post(endpoint, data) {
    const url = baseURL + endpoint;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `token ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await res.json();
      alert.set({ variant: "bg-primary", message: "Successfully updated" });
      goto("/app");
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }

  export async function upload(endpoint, data) {
    const url = baseURL + endpoint;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `token ${user.token}`,
        },
        body: data,
      });
      await res.json();
      alert.set({ variant: "bg-primary", message: "Successfully uploaded & updated" });
      goto("/app");
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }

  export async function remove(endpoint) {
    const url = baseURL + endpoint;
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `token ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      await res.json();
      alert.set({ variant: "bg-primary", message: "Successfully deleted" });
      goto("/app");
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }

  export async function runtest(endpoint) {
    const url = baseURL + endpoint;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `token ${user.token}`,
        },
      });
      await res.json();
      alert.set({ variant: "bg-primary", message: "Test has started. Please check back later for results." });
      goto("/app");
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }
</script>

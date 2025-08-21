import type { RandomUser } from "@/../../types/User";

export async function fetchRandomUserUS(): Promise<RandomUser> {
  const res = await fetch("https://randomuser.me/api/?results=1&nat=us", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch user");

  const data = await res.json();
  const user = data.results?.[0];
  console.log(user);
  return {
    name: user.name,
    email: user.email,
    login: user.login,
    picture: user.picture,
  };
}

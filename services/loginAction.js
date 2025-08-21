export async function ActionLogin({ API_RandUser }) {
  console.log(API_RandUser);

  const res = await fetch(`${API_RandUser}`);
  if (!res.ok) throw Error(`Couldn't find this user`);
  const { data } = await res.json();

  return data;
}

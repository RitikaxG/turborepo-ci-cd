import { client } from "@repo/db/client";

export default async function Home(){
  const user = await client.user.findFirst();
  return <div>
    <div>Username (My 1st Lucky User) : {user?.username}</div>
    <div>Password : {user?.password}</div>
  </div>
}

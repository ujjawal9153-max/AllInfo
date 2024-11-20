import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db"
import { redirect } from "next/navigation"
import { DashboardPage } from "@/components/discord-page";
const Page= async ()=>{
const auth = await currentUser();

if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })
  if (!user) {
    return redirect("/welcome")
  }
    return(
<DashboardPage title="Dashboard"> dashboard</DashboardPage>
    )
}
export default Page;
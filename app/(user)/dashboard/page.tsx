import NewProjBtn from "@/components/new-proj"
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./projects-list";
import { getSubscription } from "@/actions/userSubscriptions";
import { maxFreeProjects } from "@/lib/payments";

export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

  const subscribed = await getSubscription({ userId });

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>{subscribed !== true && userProjects.length > maxFreeProjects ? null : <NewProjBtn />}
      </div><ProjectsList projects={userProjects} subscribed={subscribed} /></div>
  )
}
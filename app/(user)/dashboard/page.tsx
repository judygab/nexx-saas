import NewProjBtn from "@/components/new-proj"
import { db } from "@/db";
import { projects } from "@/db/schema";

export default async function Page() {
  const allProjects = await db.select().from(projects);

  return (
    <div><NewProjBtn /></div>
  )
}
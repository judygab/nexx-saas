'use server';
import { db } from "@/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { projects } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const { userId } = auth();

  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  }

  const [newProject] = await db.insert(projects).values(project).returning({ insertedId: projects.id })

  redirect(`/projects/${newProject.insertedId}/instructions`);
}

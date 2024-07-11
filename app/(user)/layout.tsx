import Loading from "./loading";
import { Suspense } from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}
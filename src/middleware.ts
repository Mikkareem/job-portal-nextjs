import { useAuth } from "@clerk/nextjs";

export default useAuth({});

export const config = {
  matcher: ["/(admin)(.*)"],
};
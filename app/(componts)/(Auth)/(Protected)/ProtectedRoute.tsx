"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/(componts)/Rudex/hooks";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.login);

  useEffect(() => {
    if (!user) {
      router.replace("/Login");
    }
  }, [user, router]);

  if (!user) return null;

  return <>{children}</>;
}

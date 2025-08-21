"use client";
import styles from "./dashboard.module.scss";
import { useAuth } from "@/../../contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Message from "../../../components/ui/Message";

export default function DashboardPage() {
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace("/auth");
  }, [ready, user, router]);

  if (!ready)
    return (
      <div className={styles.container}>
        <p>Checking session…</p>
      </div>
    );
  if (!user) return null;

  const fullName =
    `${user.name.title} ${user.name.first} ${user.name.last}`.trim();

  console.log(`its user : ${user}`);

  return (
    <div className={styles.container}>
      {/* <Message message={"Dashboard Card"}></Message> */}
      <div className={styles.card}>
        <p>{fullName}</p>
        <p>{user.email}</p>
        <Image
          src={user.picture.medium}
          alt={fullName}
          width={96}
          height={96}
          className={styles.avatar}
        ></Image>
      </div>
    </div>
  );
}

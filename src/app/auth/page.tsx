"use client";
import styles from "./auth.module.scss";
import Input from "@/../../components/ui/Input";
import Button from "@/../../components/ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { fetchRandomUserUS } from "@/../../lib/randomUser";
import { useAuth } from "@/../../contexts/AuthContext";

const schema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/u, "شماره موبایل باید ۱۱ رقم و با 09 شروع شود"),
});

type FormValues = z.infer<typeof schema>;

export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_: FormValues) => {
    const user = await fetchRandomUserUS();
    login(user);
    router.push("/dashboard");
    if (!user) router.push("/auth");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Iranian Mobile Number"
            placeholder="09xxxxxxxxx"
            inputMode="numeric"
            maxLength={11}
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Button type="submit" loading={isSubmitting}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

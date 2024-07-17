"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IUserLogin, UserLoginSchema } from "@/types/admin/user";
import { TriangleAlert } from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";

import { login } from "@/server/auth/auth.server";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: zodResolver(UserLoginSchema) });

  const { t } = useTranslation("ru");

  async function onSubmit(data: IUserLogin) {
    try {
      const result = await login(data);

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Логин</CardTitle>
            <CardDescription>
              Нужен email и пароль чтобы войти в админ. панель
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              <span
                className={`text-xs text-yellow-200 flex items-center gap-2 mt-2 ${
                  errors.email ? "" : "hidden"
                }`}
              >
                <TriangleAlert width={17} />{" "}
                {errors.email ? t(errors.email.message ?? "") : "required"}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" {...register("password")} />
              <span
                className={`text-xs text-yellow-200 flex items-center gap-2 mt-2 ${
                  errors.password ? "" : "hidden"
                }`}
              >
                <TriangleAlert width={17} />{" "}
                {errors.password
                  ? t(errors.password.message ?? "")
                  : "required"}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Вход</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}

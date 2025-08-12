"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { signIn } from "next-auth/react";

export function LoginCard() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">로그인</TabsTrigger>
        <TabsTrigger value="signup">회원가입</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>소셜 계정으로 간편하게 로그인하세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => signIn("google")} variant="outline" className="w-full flex items-center justify-center gap-2">
              <FcGoogle className="w-5 h-5" />
              구글로 로그인
            </Button>
            <Button onClick={() => signIn("kakao")} className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-black hover:bg-[#FEE500]/90">
              <RiKakaoTalkFill className="w-5 h-5" />
              카카오로 로그인
            </Button>
            <Button onClick={() => signIn("naver")} variant="outline" className="w-full flex items-center justify-center gap-2 bg-[#03C75A] text-white hover:bg-[#03C75A]/90">
              <SiNaver className="w-5 h-5" />
              네이버로 로그인
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription>소셜 계정으로 간편하게 회원가입하세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => signIn("google")} variant="outline" className="w-full flex items-center justify-center gap-2">
              <FcGoogle className="w-5 h-5" />
              구글로 회원가입
            </Button>
            <Button onClick={() => signIn("kakao")} className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-black hover:bg-[#FEE500]/90">
              <RiKakaoTalkFill className="w-5 h-5" />
              카카오로 회원가입
            </Button>
            <Button onClick={() => signIn("naver")} variant="outline" className="w-full flex items-center justify-center gap-2 bg-[#03C75A] text-white hover:bg-[#03C75A]/90">
              <SiNaver className="w-5 h-5" />
              네이버로 회원가입
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

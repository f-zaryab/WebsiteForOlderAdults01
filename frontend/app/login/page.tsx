/*
LOGIN PAGE
A page originally meant to be used but is not being used as the desired functionality is being executed via local-storage
This page is NO LONGER IN USE. Kept here as a reference and for the future work
*/

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <section className="flex min-h-[80vh] flex-wrap gap-8 items-center justify-center p-24">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 h-14">
          <TabsTrigger value="createAccount">Create Account</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="createAccount">
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                A account is a profile page where your personalized events would
                be listed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="My preferred name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  defaultValue="My email: something@email.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" defaultValue="" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="basic">Create Account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your email and password to visit your own events page.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  defaultValue="My email: something@email.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="current">My password</Label>
                <Input id="current" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="basic">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Login;

"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}

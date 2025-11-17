import React, { useState } from "react";

export default function Login({
  onSetLoggedIn,
}: {
  onSetLoggedIn: (value: boolean) => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSaveInfo(event: React.FormEvent) {
    event.preventDefault();
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("isLoggedIn", "true");
    onSetLoggedIn(true);
  }

  return (
    <form
      onSubmit={handleSaveInfo}
      className="border-malachite-400 flex w-full max-w-sm flex-col items-center justify-center gap-6 rounded-md border px-12 py-6"
    >
      <div className="w-full space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-malachite-400 text-malachite-400 w-full rounded-md border bg-gray-900 p-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="w-full space-y-2">
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          className="border-malachite-400 text-malachite-400 w-full rounded-md border bg-gray-900 p-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div>
        <button className="rounded-md bg-gray-900 px-4 py-2 hover:cursor-pointer">
          Login
        </button>
      </div>
    </form>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-slate-400 grid place-items-center">
      <div className="w-[300px] rounded-2xl shadow-xl bg-white p-8">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <div className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={updateFirstName}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={updateLastName}
            required
            className="form-input"
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={updateEmail}
          required
          className="form-input mt-3"
        />
        <input
          id="passwordInput"
          type="password"
          placeholder="Create password"
          value={password}
          onChange={updatePassword}
          required
          className="form-input mt-3"
        />
        <button className="mt-8 form-button">Sign Up</button>
        <Link className="mt-2 block text-sm text-gray-500" to="/login">
          Already have an account?{" "}
          <span className="hover:underline cursor-pointer">Log in</span>
        </Link>
      </div>
    </div>
  );
}

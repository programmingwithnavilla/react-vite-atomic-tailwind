import React, { useState } from "react";
import { FormGroup } from "../../molecules";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="w-full max-w-sm mx-auto">
      <FormGroup
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormGroup
        id="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
};

export default AuthForm;

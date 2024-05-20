import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { Input } from "@nextui-org/input";
import { Spinner } from "@nextui-org/spinner";
import Container from "./ui/container/Container";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    const response = await fetch("https://commu-fundv2.vercel.app/postPass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const status = await response.json();
    console.log(status);
    if (status.stat === "failed") {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: "Username atau password salah!",
      });
      return;
    } else {
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: "Berhasil masuk!",
      });
      // router.push("/");
      const token = status.token;
      sessionStorage.setItem("token", token);
    }
  };

  return (
    <Container title="Masuk" desc="Masuk ke dalam akun anda">
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <Input
          type="text"
          label="Masukkan Username"
          placeholder="Username"
          labelPlacement="outside"
          isRequired
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          type="password"
          label="Masukkan Password"
          placeholder="Password"
          labelPlacement="outside"
          isRequired
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Link
          to="/reset"
          className="text-sm hover:text-primary-600 lg:text-base"
        >
          Lupa Password?
        </Link>
        <button
          type="submit"
          className={`flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 text-center text-base text-white hover:from-primary-600 hover:to-primary-600 `}
        >
          {isLoading ? <Spinner color="white" /> : "Masuk"}
        </button>
        <Link
          to="/register"
          className="text-center text-sm hover:text-primary-600 lg:text-base"
        >
          Belum Memiliki Akun?
        </Link>
      </form>
    </Container>
  );
}

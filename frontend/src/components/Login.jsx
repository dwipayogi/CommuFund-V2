import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { Input } from "@nextui-org/input";
import { Spinner } from "@nextui-org/spinner";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
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

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="m-auto flex h-screen max-w-7xl items-center justify-center">
      <div className="w-5/6 rounded-xl bg-gray-300 p-12 md:w-8/12 lg:w-1/2 lg:p-20">
        <h1 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-8 lg:text-4xl">
          Masuk
        </h1>
        <p className="mb-8 text-center text-base md:text-lg lg:text-xl">
          Masuk ke dalam akun anda
        </p>
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
            type={isVisible ? "text" : "password"}
            label="Masukkan Password"
            placeholder="Password"
            labelPlacement="outside"
            isRequired
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
              </button>
            }
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
      </div>
    </main>
  );
}

import Container from "./ui/container/Container"
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Input } from "@nextui-org/input";

export default function RegisterOrganisasi() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [sektor, setSektor] = useState("");
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [narahubung, setNarahubung] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    if (password !== retypePassword) {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: "Password tidak sama!",
      });
      return;
    }
    const response = await fetch("https://commu-fundv2.vercel.app/postRegis");
    if (!response.ok) {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: "Gagal mendaftar",
      });
      return;
    }
    setIsLoading(false);
    Toast.fire({
      icon: "success",
      title: "Berhasil mendaftar",
    });
  };

  return (
    <Container title="Daftar Sebagai Organisasi" desc="Daftar akun organisasi baru">
      <form className="flex flex-col gap-3" onSubmit={handleRegister}>
        <Input
          type="text"
          label="Nama Organisasi"
          placeholder="Nama Organisasi"
          labelPlacement="outside"
          isRequired
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          label="Username"
          placeholder="Username"
          labelPlacement="outside"
          isRequired
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          label="Kategori"
          placeholder="Kategori"
          labelPlacement="outside"
          isRequired
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          type="text"
          label="Sektor"
          placeholder="Sektor"
          labelPlacement="outside"
          isRequired
          value={sektor}
          onChange={(e) => setSektor(e.target.value)}
        />
        <Input
          type="text"
          label="Alamat"
          placeholder="Alamat"
          labelPlacement="outside"
          isRequired
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <Input
          type="text"
          label="Provinsi"
          placeholder="Provinsi"
          labelPlacement="outside"
          isRequired
          value={provinsi}
          onChange={(e) => setProvinsi(e.target.value)}
        />
        <Input
          type="text"
          label="Kota"
          placeholder="Kota"
          labelPlacement="outside"
          isRequired
          value={kota}
          onChange={(e) => setKota(e.target.value)}
        />
        <Input
          type="text"
          label="Narahubung"
          placeholder="Narahubung"
          labelPlacement="outside"
          isRequired
          value={narahubung}
          onChange={(e) => setNarahubung(e.target.value)}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          labelPlacement="outside"
          isRequired
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          labelPlacement="outside"
          isRequired
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          labelPlacement="outside"
          isRequired
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
        />
        <Link
          to="/login"
          className="text-sm hover:text-primary-600 lg:text-base"
        >
          Sudah memiliki akun?
        </Link>
        <button
          type="submit"
          className={`flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 text-center text-base text-white hover:from-primary-600 hover:to-primary-600 `}
        >
          Daftar
        </button>
      </form>
    </Container>
  )
}
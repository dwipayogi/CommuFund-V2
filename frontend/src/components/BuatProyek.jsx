import Container from "./ui/container/Container";

import { useState } from "react";
import Swal from "sweetalert2";
import { Input } from "@nextui-org/input";
import { Spinner } from "@nextui-org/spinner";

export default function BuatProyek() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState(0);
  const [volunteer, setVolunteer] = useState(0);
  const [date, setDate] = useState(new Date());
  const [rekening, setRekening] = useState("");
  const [category, setCategory] = useState("");

  const handleadd = async (e) => {
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
        name,
        description,
      }),
    });
    const status = await response.json();
    console.log(status);
    if (status.stat === "failed") {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: "Data yang diinputkan salah!",
      });
      return;
    } else {
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: "Berhasil membuat proyek baru!",
      });
      // router.push("/");
    }
  };

  return (
    <Container title="Pembuatan Proyek" desc="Lengkapi data untuk pembuatan proyek">
      <form className="flex flex-col gap-3" onSubmit={handleadd}>
        <Input
          type="text"
          label="Masukkan Nama Komunitas/Kelompok"
          placeholder="Nama Komunitas/Kelompok"
          labelPlacement="outside"
          isRequired
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          type="text"
          label="Masukkan Deskripsi Proyek"
          placeholder="Deskripsi Proyek"
          labelPlacement="outside"
          isRequired
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
        <Input
          type="number"
          label="Masukkan Dana yang Dibutuhkan"
          placeholder="Dana yang Dibutuhkan"
          labelPlacement="outside"
          isRequired
          value={money.toString()}
          onChange={(e) => setMoney(Number(e.target.value))}
        ></Input>
        <Input
          type="number"
          label="Masukkan Volunteer yang Dibutuhkan"
          placeholder="Volunteer yang Dibutuhkan"
          labelPlacement="outside"
          isRequired
          value={volunteer.toString()}
          onChange={(e) => setVolunteer(Number(e.target.value))}
        ></Input>
        <Input
          type="date"
          label="Masukkan Tanggal Deadline"
          placeholder="Tanggal Deadline"
          labelPlacement="outside"
          isRequired
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        ></Input>
        <Input
          type="number"
          label="Masukkan Nomor Rekening"
          placeholder="Nomor Rekening"
          labelPlacement="outside"
          isRequired
          value={rekening}
          onChange={(e) => setRekening(e.target.value)}
        ></Input>
        <Input
          type="text"
          label="Masukkan Kategori Proyek"
          placeholder="Kategori Proyek"
          labelPlacement="outside"
          isRequired
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></Input>
        <button
          type="submit"
          className={`flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 text-center text-base text-white hover:from-primary-600 hover:to-primary-600 `}
        >
          {isLoading ? <Spinner color="white" /> : "Buat"}
        </button>
      </form>
    </Container>
  );
}

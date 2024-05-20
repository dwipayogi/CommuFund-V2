
import { IconContext } from "react-icons";
import { BiPhone, BiMailSend } from "react-icons/bi";
import logo from "/logo.png";

export default function Footer() {
  const menuItems = ["Beranda", "Donasi", "Volunteer", "Tentang Kami"];

  return (
    <footer className="flex flex-col gap-8 bg-primary-100 p-8 lg:flex-row lg:justify-evenly mt-12">
      <div className="basis-1/4">
        <img src={logo} alt="Logo" width={120} height={120} />
        <p>
          CommuFund adalah sebuah platform untuk penggalangan dana dan pencarian
          relawan bagi organisasi nirlaba
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Menu</h2>
        {menuItems.map((menuItem, index) => (
          <a key={index} href={`#${menuItem}`}>
            {menuItem}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Kontak</h2>
        <p>Hubungi kami melalui:</p>
        <div className="flex items-center gap-2">
          <IconContext.Provider value={{ className: "w-8 h-8" }}>
            <BiMailSend />
            commu.fund@commufund.com
          </IconContext.Provider>
        </div>
        <div className="flex items-center gap-2">
          <IconContext.Provider value={{ className: "w-8 h-8" }}>
            <BiPhone />
            0812 1094 3940
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
}
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Progress } from "@nextui-org/progress";
import logo from "/logo.png";

export default function CardComponents({ status }) {
  return (
    <Card>
      <CardHeader className="flex aspect-square w-full items-center justify-center">
        <img alt="images" className="rounded-xl" src={logo} />
      </CardHeader>
      {status === "donasi" && (
        <CardBody className="flex-col items-start px-4 pb-0 pt-2">
          <h3 className="text-xl font-bold">Nama Proyek</h3>
          <p className="text-lg">Organisasi</p>
          <Progress aria-label="Loading..." value={70} className="max-w-md" />
          <p className="text-lg">Dana Terkumpul</p>
          <p className="text-sm">Sisa hari</p>
        </CardBody>
      )}
      {status === "volunteer" && (
        <CardBody className="flex-col items-start px-4 pb-0 pt-2">
          <h3 className="text-xl font-bold">Nama Proyek</h3>
          <p className="text-lg">Organisasi</p>
          <Progress aria-label="Loading..." value={70} className="max-w-md" />
          <p className="text-lg">Volunteer Terkumpul</p>
          <p className="text-sm">Sisa hari</p>
        </CardBody>
      )}
      {status !== "donasi" && status !== "volunteer" && (
        <CardBody className="flex-col items-start px-4 pb-0 pt-2">
          <h3 className="text-xl font-bold">Nama Proyek</h3>
          <p className="text-lg">Organisasi</p>
          <Progress aria-label="Loading..." value={70} className="max-w-md" />
          <p className="text-lg">Dana Terkumpul</p>
          <p className="text-sm">Sisa hari</p>
          <Progress aria-label="Loading..." value={70} className="max-w-md" />
          <p className="text-lg">Volunteer Terkumpul</p>
          <p className="text-sm">Sisa hari</p>
        </CardBody>
      )}
      <Divider className="h-1 bg-primary-200" />
      <CardFooter className="flex gap-3 p-4">
        <img
          alt="images"
          className="h-6 w-6 rounded-full border-2 border-black"
          src={logo}
        />
        <p>Pembuat Proyek</p>
      </CardFooter>
    </Card>
  );
}

import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center font-semibold text-4xl">Oops!</h1>
        <p className="text-center text-xl">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-center">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          to="/"
          className="text-center text-primary-600 hover:text-white hover:bg-primary-600 border-2 border-primary-600 rounded-lg w-max px-4 py-2"
        >
          Return
        </Link>
      </div>
    </div>
  );
}

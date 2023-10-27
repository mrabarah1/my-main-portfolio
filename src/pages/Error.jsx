import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="min-h-screen text-center grid place-content-center">
        <img src={img} alt="not found" className="w-96 max-w-2xl mb-8 -mt-12" />
        <h3 className="mb-2 block">Ohh!</h3>
        <p className="leading-loose mt-2 mb-4 text-slate-500 ">
          We can't seem to find the page you are looking for
        </p>
        <Link to="/" className="text-sky-500 capitalize">
          back home
        </Link>
      </div>
    );
  }
  return (
    <h2 className="mx-auto max-w-7xl grid place-content-center py-20">
      Something went wrong
    </h2>
  );
};

export default Error;

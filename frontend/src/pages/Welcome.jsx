import { WelcomeNavbar } from "../components/WelcomeNavbar";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div>
      <WelcomeNavbar />
      <div className="flex flex-col items-center mt-6 lg:mt-28  ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold tracking-wide">
          Welcome to SecondBrain!
        </h1>
        <p className="mt-10 text-lg text-center text-black max-w-4xl">
          Simplify task management for your team. Collaborate effortlessly,
          assign tasks, and track progress together with SecondBrain.
        </p>
        <div className="flex justify-center my-10">
          <Link
            to="/register"
            href="#"
            className="bg-black text-white py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </Link>
        </div>
      </div>
    </div>
  );
}

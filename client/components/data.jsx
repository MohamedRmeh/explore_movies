import Link from "next/link";

export const CustomButtonGreen = ({ onClick, children, href }) => {
  return (
    <Link
    className="bg-lime-500 text-black p-t-3 rounded-md px-3 py-2 font-medium"
    onClick={onClick}
      href={href}
    >
      {children}
    </Link>
  );
};

export const CustomButtonaBlack = ({ onClick, children, href }) => {
  return (
    <Link
      onClick={onClick}
      className="bg-black text-lime-400 p-t-3 rounded-md px-3 py-2 font-medium"
      href={href}
    >
      {children}
    </Link>
  );
};

export const SearchBar = ({placeholder}) => {
  return (
    <label className="relative block ">
      <input
        className="placeholder:italic placeholder:text-lime-700 block bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        type="text"
        name="search"
      />
    </label>
  );
};

export const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    class:
      "hover:text-lime-400 transition delay-90 ease-in-out hover:-translate-x-1",
  },
  {
    id: 4,
    title: "Movies",
    url: "/movies",
    class:
      "hover:text-lime-400 transition delay-90 ease-in-out hover:-translate-x-1",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    class:
      "hover:text-lime-400 transition delay-90 ease-in-out hover:-translate-x-1",
  },
  {
    id: 3,
    title: "Submit",
    url: "/submit",
    class:
      "hover:text-lime-400 transition delay-90 ease-in-out hover:-translate-x-1",
  },
];

export const SocialMedia = [
  {
    id: 1,
    name: "facebook",
  },
  {
    id: 4,
    name: "instagram",
  },
  {
    id: 2,
    name: "linkedin",
  },
  {
    id: 3,
    name: "whatsapp",
  },
];

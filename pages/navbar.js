import Image from "next/image";

import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex w-full  bg-blue-950 px-2.5 py-5 items-center justify-between h-24 ">
      <div className="flex-row">
        <Link href="/">
          <Image
            alt="company logo"
            src="/cover.png"
            height={200}
            width={200}
            className="rounded-lg h-16"
          />
        </Link>
      </div>

      <div className="flex w-1/4 flex-row  not-italic font-bold text-sky-300 text-base justify-evenly">
        <div className="flex flex-row  items-center">
          <Link href="/">
            <Image
              src="data:image/png;base64,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"
              alt="profil logo"
              className="h-10 rounded-full"
              height={25}
              width={40}
              
            />
          </Link>
          <span className="ml-2.5">Amrit</span>
        </div>

        <div className="flex not-italic font-bold text-base text-sky-300 ">
          <ul className="flex flex-row list-none">
            <li className="px-2 py-2 hover:cursor-pointer">
              <Link href="/login" legacyBehavior >
                  <a className="no-underline text-white hover:underline">
                    Log in
                  </a>
              </Link>
            </li>
            <li className="px-2 py-2 hover:cursor-pointer">
              <Link href="/" className="no-underline text-white hover:underline">Log out</Link>
            </li>
            <li className="px-2 py-2 hover:cursor-pointer">
              <Link href="/" className="no-underline text-white hover:underline">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

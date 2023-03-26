import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full lg:px-24 lg:pt-4 p-4 pb-0 flex justify-between items-center sticky top-0 z-10 bg-white">
      <div className="logo">
        <Image src="/images/Dark Logo.png" width={120} height={120} />
      </div>
      <div className="flex items-center">
        <ul className="lg:flex hidden">
          <li className="mr-4">
            <a href="#">How It Works</a>
          </li>
          <li className="mr-4">
            <a href="#">Learn More</a>
          </li>
        </ul>
        <a href="#pricing-table" className="inline-block bg-blue-500 font-medium text-white text-md py-2 px-6 rounded-sm">
          Join Now
        </a>
      </div>
    </nav>
  );
}

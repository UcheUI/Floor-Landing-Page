import Image from "next/image";

export default function Hero({ className }) {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
}

function SectionOne() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center pt-4">
        <h1 className="lg:text-6xl text-4xl font-semibold mb-2 text-center">
          Discover • Connect • Grow
        </h1>
        <p className="text-gray-600 text-center text-md">
          Join Floor today and discover your next opportunity!
        </p>
        <span className="my-4 inline-block">
          <a
            href="#pricing-table"
            className="inline-block bg-blue-500 font-medium text-white text-md py-3 px-8 rounded-sm mr-4"
          >
            Join Now
          </a>

          <a
            href="https://floor-app.notion.site/Welcome-to-Floor-27072cdb12954abda34a8eaa7c5519e3"
            className="inline-block border-1 border-black border-solid font-semibold text-black text-md py-3 px-6 "
          >
            Learn more
          </a>
        </span>
      </div>
      <div>
        <Image src="/images/Frame 81.png" width={600} height={600} />
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="w-full my-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        How Floor Works!
      </h1>

      <div className="p-2">
        <Image src="/images/Frame 203.png" width={800} height={400} />
      </div>
    </section>
  );
}

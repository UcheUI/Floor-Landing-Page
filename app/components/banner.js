export default function Banner() {
  return (
    <section className="w-full h-auto bg-blue-600 text-white lg:p-24 px-8 py-24 flex flex-col items-center justify-center">
      <span className="flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl text-center text-4xl mb-2">Still Doubting?</h1>
        <p className="text-md mb-2">
          Don't miss this opportunity! Join Floor Today!
        </p>
        <button className="bg-black text-white text-md py-2 px-6 rounded-sm">
          Join Now
        </button>
      </span>
    </section>
  );
}

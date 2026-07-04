import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h2 className="text-4xl font-bold">
          Design Anything. Make It Yours.
        </h2>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Create your own T-Shirts, Hoodies, Mugs, Phone Cases and more with our easy online designer.
        </p>

        <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          Start Designing
        </button>

      </section>

    </main>
  );
}
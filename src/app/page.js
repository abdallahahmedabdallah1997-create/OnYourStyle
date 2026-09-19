import Header from "@/components/Header";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">

      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background Shapes */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* Text */}
          <div className="text-center lg:text-right">

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              على{" "}
              <span className="text-orange-500">
                ذوقك
              </span>
            </h1>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              من الفكرة... للبس.
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500 lg:mx-0" />

            <p className="mx-auto mt-7 max-w-xl text-lg leading-9 text-slate-600 lg:mx-0">
              صمم تيشيرتك بطريقتك الخاصة،
              <br />
              وأضف لمستك المميزة واستلمها أينما كنت.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <button className="rounded-xl bg-slate-950 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800">
                ✎ ابدأ التصميم
              </button>

              <button className="rounded-xl border-2 border-orange-500 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-orange-50">
                تسوق الآن ←
              </button>

            </div>

          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">

            {/* Orange Circle */}
            <div className="absolute right-5 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500 opacity-90 blur-[1px] sm:h-96 sm:w-96" />

            <img
              src="/hero-shirt.png.jpeg"
              alt="OnYourStyle Custom T-Shirt"
              className="relative z-10 w-full max-w-xl object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl md:grid-cols-4">

          <Feature
            icon="🔒"
            title="دفع آمن"
            text="طرق دفع متعددة"
          />

          <Feature
            icon="🎧"
            title="دعم متاح"
            text="على مدار الساعة"
          />

          <Feature
            icon="🏅"
            title="جودة مضمونة"
            text="خامات عالية الجودة"
          />

          <Feature
            icon="🚚"
            title="شحن سريع"
            text="لجميع المحافظات"
          />

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle title="صمم على كل المنتجات" />

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">

            <ProductCard
              image="/hero-shirt.png"
              title="تيشيرت"
            />

            <ProductCard
              image="/hero-shirt.png"
              title="هودي"
            />

            <ProductCard
              image="/hero-shirt.png"
              title="مج"
            />

            <ProductCard
              image="/hero-shirt.png"
              title="كاب"
            />

            <ProductCard
              image="/hero-shirt.png"
              title="توت باج"
            />

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-orange-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle title="كيف نعمل؟" />

          <div className="mt-14 grid gap-12 md:grid-cols-4">

            <Step
              number="1"
              icon="💡"
              title="اختر المنتج"
              text="اختر المنتج اللي يعجبك"
            />

            <Step
              number="2"
              icon="T"
              title="صمم بطريقتك"
              text="أضف نصوص، صور، واختر الألوان"
            />

            <Step
              number="3"
              icon="💳"
              title="اتمام الطلب"
              text="اختر المقاس وأكمل الدفع"
            />

            <Step
              number="4"
              icon="📦"
              title="يوصلك لباب البيت"
              text="جودة عالية وتوصيل سريع"
            />

          </div>

        </div>

      </section>

    </main>
  );
}


/* ================= COMPONENTS ================= */

function Feature({ icon, title, text }) {
  return (
    <div className="border-b border-slate-100 p-7 text-center md:border-b-0 md:border-l last:border-l-0">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 font-bold text-lg">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {text}
      </p>
    </div>
  );
}


function ProductCard({ image, title }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-slate-50 p-4 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-52 items-center justify-center overflow-hidden rounded-xl bg-white">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-4 text-center text-xl font-bold">
        {title}
      </h3>

    </div>
  );
}


function SectionTitle({ title }) {
  return (
    <div className="text-center">

      <h2 className="text-3xl font-extrabold sm:text-4xl">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />

    </div>
  );
}


function Step({ number, icon, title, text }) {
  return (
    <div className="relative text-center">

      <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-md">

        {icon}

        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
          {number}
        </span>

      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}
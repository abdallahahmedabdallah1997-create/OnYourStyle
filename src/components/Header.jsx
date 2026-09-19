export default function Header() {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold tracking-tight text-slate-950">
            On<span className="text-orange-500">Your</span>Style
          </span>

          <span className="mt-1 text-xs font-medium text-slate-500">
            من الفكرة... للبس.
          </span>
        </a>


        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="font-semibold text-orange-500 transition hover:text-orange-600"
          >
            الرئيسية
          </a>

          <a
            href="#products"
            className="font-medium text-slate-600 transition hover:text-orange-500"
          >
            المنتجات
          </a>

          <a
            href="#design"
            className="font-medium text-slate-600 transition hover:text-orange-500"
          >
            صمم الآن
          </a>

          <a
            href="#how"
            className="font-medium text-slate-600 transition hover:text-orange-500"
          >
            كيف نعمل؟
          </a>

          <a
            href="#about"
            className="font-medium text-slate-600 transition hover:text-orange-500"
          >
            عنّا
          </a>

        </nav>


        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Account */}
          <button
            aria-label="الحساب"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-lg transition hover:bg-orange-50 hover:text-orange-500 sm:flex"
          >
            👤
          </button>

          {/* Cart */}
          <button
            aria-label="السلة"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-lg transition hover:bg-orange-50 hover:text-orange-500"
          >
            🛒

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            aria-label="القائمة"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-xl md:hidden"
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}
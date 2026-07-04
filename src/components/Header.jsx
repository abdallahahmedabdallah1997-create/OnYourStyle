export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

      <h1 className="text-4xl font-bold">
        OnYourStyle
      </h1>

      <nav className="flex gap-8 text-gray-300">
        <a className="hover:text-white transition" href="#">Home</a>
        <a className="hover:text-white transition" href="#">Designs</a>
        <a className="hover:text-white transition" href="#">About</a>
      </nav>

    </header>
  );
}
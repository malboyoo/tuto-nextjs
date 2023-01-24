export default function Header() {
  return (
    <header className="flex flex-row justify-between p-5  text-[#192a56] shadow-lg">
      <h1 className="text-2xl text-[#192a56] font-bold">mon blog course à pied</h1>
      <nav>
        <ul className="flex flex-row list-none ">
          <li className="mr-4 border-2 border-gray-900 rounded-md px-3 py-1">se connecter</li>
          <li className="mr-4 border-2 border-gray-900 rounded-md px-3 py-1">accueil</li>
          <li className="mr-4 border-2 border-gray-900 rounded-md px-3 py-1">s'abonner</li>
        </ul>
      </nav>
    </header>
  );
}

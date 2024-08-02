const Sidebar = () => {
  return (
    <div className="flex h-screen">
<div className=" w-48 h-screen bg-gradient-to-t bg-gradient-to-t from-purple-500 to-blue-200 shadow-sm">

      <div className="p-2 text-3xl font-bold text-black " >
      <nav className="flex-1  font-semibold" >
        <ul className="mt-1 space-y-3 ">
          <li>
            <a href="/" className="block  text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Ana Sayfa</a>
          </li>
          <li>
            <a href="/" className="block  text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Siparişler</a>
          </li>
          <li>
            <a href="/" className="block text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Üyeler</a>
          </li>
          <li>
            <a href="/" className="block text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Kategoriler</a>
          </li>
          <li>
            <a href="/" className="block text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Sliderlar</a>
          </li>
          <li>
            <a href="/" className="block text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Kampanyalar</a>
          </li>
          <li>
          <a href="/" className="block text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Sayfalar</a>

          </li>
          <li>
          <a href="/" className="  text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded  ">Bilgilendirmeler</a>

          </li>
          <li>
          <a href="/" className="block text-xl px-2 py-2 text-black-700 hover:bg-gray-100 rounded">Raporlar</a>

          </li>

        </ul>
      </nav>
    </div></div></div>
  );
};

export default Sidebar;

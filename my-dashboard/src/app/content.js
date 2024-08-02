
import { db } from './firebase';

import OrdersList from './orderlist';
const Content = () => {
    return (
      <div className="flex-1 p-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4 text-black">Dağıtım Bekleyen Siparişler</h1>

            {/* İçerik buraya gelecek */}
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold mb-4 text-black">Dağıtımdaki Siparişler</h1>
            {/* İçerik buraya gelecek */}
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow-md text-black">
            <h1 className="text-xl font-semibold mb-4">Bugün Teslim Edilen Siparişler</h1>
            {/* İçerik buraya gelecek */}
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow-md text-black " >
            <h1 className="text-xl font-semibold mb-4">Bugün İptal Siparişler</h1>
  
           
          </div>
 
        </div>
        <OrdersList />
      </div>
    );
  };
  
  export default Content;
  

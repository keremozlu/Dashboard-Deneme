
import { db } from './firebase'; 

const OrdersDisplay = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const ordersList = [];
        querySnapshot.forEach((doc) => {
          ordersList.push({ id: doc.id, ...doc.data() });
        });
        setOrders(ordersList);
      } catch (e) {
        console.error('Error getting documents: ', e);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p><strong>ID:</strong> {order.id}</p>
            <p><strong>Ad Soyad:</strong> {order.AdSoyad}</p>
            <p><strong>Depo:</strong> {order.Depo}</p>
            <p><strong>Durum:</strong> {order.Durum}</p>
            <p><strong>Sipariş No:</strong> {order.SiparisNo}</p>
            <p><strong>Sıra:</strong> {order.Sira}</p>
            <p><strong>Tarih:</strong> {order.Tarih.toDate().toLocaleString()}</p>
            <p><strong>Tutar:</strong> {order.Tutar}</p>
            <p><strong>Ödeme:</strong> {order.Odeme}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersDisplay;
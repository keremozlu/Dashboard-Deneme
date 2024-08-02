"use client";
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'db'));
        const ordersList = [];
        querySnapshot.forEach((doc) => {
          ordersList.push({ id: doc.id, ...doc.data() });
        });
        setOrders(ordersList);
      } catch (e) {
        console.error('Error fetching orders: ', e);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Sıra</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Tarih</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Sipariş No</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Ad Soyad</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Depo</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Ödeme Tipi</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Tutar</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Durum</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="border-b border-gray-200">
              <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.Tarih?.toDate().toLocaleDateString()}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.SiparisNo}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.AdSoyad}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.Depo}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.OdemeTipi}</td>
              <td className="px-6 py-4 text-sm text-gray-700">₺{order.Tutar}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.Durum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

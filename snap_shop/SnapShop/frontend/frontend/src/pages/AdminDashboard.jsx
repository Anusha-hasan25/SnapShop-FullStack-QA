import React, { useState, useEffect } from 'react';
import { X, User, Clock, ShoppingBag } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/orders")
      .then(res => res.json())
      .then(data => { setOrders(data); setLoading(false); })
      .catch(err => { console.error("Admin Fetch Error:", err); setLoading(false); });
  }, []);

  const totalRevenue = orders.reduce((acc, o) => acc + o.total_amount, 0);

  if (loading) return <div className="pt-48 text-center serif italic">Accessing Boutique Analytics...</div>;

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div>
          <h1 className="serif italic text-5xl uppercase tracking-tighter">SnapShop Analytics</h1>
          <p className="text-[10px] tracking-[5px] text-gray-400 uppercase mt-4">Owner Management Console</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] tracking-[3px] text-[#C5A059] font-bold uppercase mb-2">Net Revenue</p>
          <h2 className="text-4xl font-bold">Rs {totalRevenue.toLocaleString()}</h2>
        </div>
      </header>

      <div className="admin-table-container">
        <table className="luxury-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Client Details</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="font-bold tracking-widest text-sm">#{order.id}</td>
                <td className="py-6">
                  {/* Yahan gap-1 aur mt-1 se separation behtar ho gayi hai */}
                  <div className="flex flex-col gap-1">
                    <span className="serif italic text-xl leading-none text-black">
                      {order.customer_name}
                    </span>
                    <span className="text-[9px] text-gray-400 uppercase tracking-[3px] mt-1">
                      {order.customer_email}
                    </span>
                  </div>
                </td>
                <td className="text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString('en-GB')}</td>
                <td className="font-bold text-black">Rs {order.total_amount.toLocaleString()}</td>
                <td>
                  <button onClick={() => setSelectedOrder(order)} className="admin-view-btn">Review Items</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="admin-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedOrder(null)}><X size={20}/></button>
            <h3 className="serif italic text-3xl mb-10 border-b pb-4">Order Detail View</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="info-block">
                  <p className="label">Client Information</p>
                  <p className="flex items-center gap-3 text-sm mt-2 font-medium">
                    <User size={14} className="text-[#C5A059]"/> {selectedOrder.customer_name}
                  </p>
                  <p className="text-[10px] text-gray-400 ml-7 uppercase tracking-widest">
                    {selectedOrder.customer_email}
                  </p>
                </div>
                <div className="info-block">
                  <p className="label">Timestamp</p>
                  <p className="flex items-center gap-3 text-xs text-gray-400 italic mt-2"><Clock size={14}/> {new Date(selectedOrder.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div>
                <p className="label mb-4">Purchased Collection</p>
                <div className="items-scroll space-y-3">
                  {selectedOrder.items?.length > 0 ? (
                    selectedOrder.items.map(item => (
                      <div key={item.id} className="flex justify-between items-center border-b border-gray-50 pb-3 text-sm">
                        <span className="serif italic">{item.product_name} <span className="text-gray-400 text-[10px] uppercase ml-2">x{item.quantity}</span></span>
                        <span className="font-bold">Rs {item.price.toLocaleString()}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-400 italic">No item data returned from server.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
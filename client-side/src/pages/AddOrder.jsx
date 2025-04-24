import React, { useState } from "react";
import OrderModal from "../components/OrderModal";
import OrderTable from "../components/OrderTable";

const AddOrder = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [orders, setOrders] = useState([])

  const addNewOrder = (order) => {
    console.log(order)
    setOrders([...orders, order])
  }

  return (
    <div className="container mt-4">
    <h1 className="mb-4">Add Orders</h1>
    <button className="btn btn-primary mb-3" onClick={() => setModalOpen(true)}>
      Add Order
    </button>
    <OrderTable orders={orders} />
    <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addNewOrder} />
  </div>
  )
}


export default AddOrder;

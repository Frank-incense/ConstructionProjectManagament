// src/components/OrderModal.jsx
import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.amount) {
    errors.amount = "Required";
  }
  if (!values.delivery) {
    errors.delivery = "Required";
  } else if (isNaN(values.delivery) || values.delivery <= 0) {
    errors.delivery = "delivery must be a positive number";
  }
  return errors;
};

const OrderModal = ({ isOpen, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      supplier: "",
      delivery: "",
      status: "",
    },
    validate,
    onSubmit: (values) => {
      onSubmit(values);
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add New Order</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">amount</label>
                <input
                  type="text"
                  name="amount"
                  className={`form-control ${
                    formik.touched.amount && formik.errors.amount
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.amount}
                />
                {formik.touched.amount && formik.errors.amount ? (
                  <div className="invalid-feedback">{formik.errors.amount}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className={`form-control ${
                    formik.touched.supplier && formik.errors.supplier
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.supplier}
                />
                {formik.touched.supplier && formik.errors.supplier ? (
                  <div className="invalid-feedback">{formik.errors.supplier}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  className={`form-select ${
                    formik.touched.status && formik.errors.status
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                >
                  <option value="">Select status</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
                {formik.touched.status && formik.errors.status ? (
                  <div className="invalid-feedback">{formik.errors.status}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label className="form-label">Delivery</label>
                <input
                  type="number"
                  name="delivery"
                  className={`form-control ${
                    formik.touched.delivery && formik.errors.delivery
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.delivery}
                />
                {formik.touched.delivery && formik.errors.delivery ? (
                  <div className="invalid-feedback">
                    {formik.errors.delivery}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

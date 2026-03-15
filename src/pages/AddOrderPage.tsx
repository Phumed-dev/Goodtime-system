import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Label,
  TextInput,
  Textarea,
  Select,
  Card,
} from "flowbite-react";
import { HiArrowLeft, HiCheck } from "react-icons/hi";

export default function AddOrderPage() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    orderDate: "",
    dueDate: "",
    productName: "",
    quantity: "",
    description: "",
    status: "pending",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log("Order submitted:", formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        customerName: "",
        email: "",
        phone: "",
        orderDate: "",
        dueDate: "",
        productName: "",
        quantity: "",
        description: "",
        status: "pending",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      {/* Navigation */}
      <nav className="bg-white shadow-md mb-8 rounded-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <HiArrowLeft className="h-5 w-5" />
            <span className="text-2xl font-bold">GoodTime</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Orders
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Support
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create New Order
          </h1>
          <p className="text-gray-600">
            Fill out the form below to add a new order to your system
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <HiCheck className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">
                Order Created Successfully!
              </h3>
              <p className="text-green-700 text-sm">
                Your order has been added to the system.
              </p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <Card className="shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <TextInput
                    id="customerName"
                    name="customerName"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <TextInput
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="my-6" />

            {/* Order Details Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="orderDate">Order Date *</Label>
                  <TextInput
                    id="orderDate"
                    name="orderDate"
                    type="date"
                    required
                    value={formData.orderDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date *</Label>
                  <TextInput
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    required
                    value={formData.dueDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    id="status"
                    name="status"
                    required
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </Select>
                </div>
              </div>
            </div>

            <hr className="my-6" />

            {/* Product Information Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Product Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="productName">Product Name *</Label>
                  <TextInput
                    id="productName"
                    name="productName"
                    type="text"
                    placeholder="Product name"
                    required
                    value={formData.productName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity *</Label>
                  <TextInput
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="1"
                    required
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter order description or special instructions..."
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr className="my-6" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Link to="/">
                <Button color="gray" className="w-full sm:w-auto">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="w-full sm:w-auto">
                Create Order
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

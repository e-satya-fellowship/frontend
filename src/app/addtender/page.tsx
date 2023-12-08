"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const AddTender: React.FC = () => {
  // State to manage form values
  const [formData, setFormData] = useState({
    title: '',
    budget: '',
    deadline: '',
    description: '',
  });

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to handle the form data, e.g., send it to the server
    console.log('Form submitted:', formData);
  };

  // Function to handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
           {/* User Account Details Section */}
    <div className="mb-6 text-center">
    <div className="bg-white p-6 rounded-md shadow-md">
    <h2 className="text-xl font-bold mb-2">Your Account</h2>
    <p className="text-gray-600 truncate">
        <span className="md:block">0x1234567890123456789012345678901234567890123456789012345678901234</span>
    </p>
    </div>
    </div>
      <div className="flex justify-end mb-4">
        <Link href="/tenders">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
            Back to Tenders
          </button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Add Tender</h1>

      {/* Tender Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Tender Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Minimum Budget Field */}
        <div className="mb-4">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-600">
            Minimum Budget
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Deadline Field */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTender;

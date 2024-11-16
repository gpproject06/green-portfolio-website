'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import x from '/public/x.svg';

interface SignUpModalProps {
  onClose: () => void;
}

interface FormData {
  clientName: string;
  clientEmail: string;
}

interface ValidationData {
  clientName: boolean;
  clientEmail: boolean;
}

export default function SignUpModal({ onClose }: SignUpModalProps) {
  const [formData, setFormData] = useState<FormData>({ clientName: '', clientEmail: '' });
  const [validation, setValidation] = useState<ValidationData>({ clientName: true, clientEmail: true });
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<boolean>(false);

  // Email validation regex
  const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i;

  const validateInput = (name: string, value: string) => {
    if (name === 'clientEmail') {
      return emailRegex.test(value);
    }
    // Validate clientName to ensure it's not empty
    if (name === 'clientName') {
      return value.trim().length > 0;
    }
    return true;
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    let isValid = validateInput(name, value);

    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));

    setValidation((currValidation) => ({
      ...currValidation,
      [name]: isValid,
    }));

    // Update error messages based on validation
    if (!isValid) {
      setError(name === 'clientEmail' ? 'Invalid Email' : 'Name cannot be empty');
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Check if all fields are valid
    if (!validation.clientEmail || !validation.clientName || !formData.clientEmail || !formData.clientName) {
      setError('Please fill out all fields correctly and try again.');
      return;
    }
  
    const { clientName, clientEmail } = formData;
  
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientName, clientEmail }),
      });
  
      const { msg, success } = await res.json();
  
      if (success) {
        setConfirmation(true);
        setFormData({ clientName: '', clientEmail: '' });
        setValidation({ clientName: true, clientEmail: true });
      } else {
        setError(msg || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred during submission. Please try again later.');
    }
  };  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg relative w-11/12 md:w-1/2 lg:w-1/3 p-6 pl-9">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <Image src={x} alt="close modal" />
        </button>
        {!confirmation ? (
          <>
            <h2 className="text-2xl mb-4">Sign Up</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4 w-11/12">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  className={`w-full border ${validation.clientName ? 'border-gray-300' : 'border-red-500'} rounded-md p-2`}
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Field */}
              <div className="mb-4 w-11/12">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  className={`w-full border ${validation.clientEmail ? 'border-gray-300' : 'border-red-500'} rounded-md p-2`}
                  placeholder="Enter your email"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-lg whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          // Confirmation Message and Exit Button
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl mb-4">Thank You for Your Submission!</h2>
            <p>We appreciate your interest and will get back to you ASAP.</p>
            <button
              onClick={onClose}
              className="mt-6 bg-black text-white w-36 px-4 py-2 rounded-md"
            >
              Exit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

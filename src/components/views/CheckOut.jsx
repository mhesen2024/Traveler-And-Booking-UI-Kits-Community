    import React, { useState } from 'react';
    import visa from '../asserts/PNG/visa.png';
    import mastercard from '../asserts/PNG/mastercard.png';
    import express from '../asserts/PNG/express.png';
    import discover from '../asserts/PNG/discover.png';

    const CheckOut = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        receiveAlerts: false,
        nameOnCard: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        securityCode: '',
        billingZipCode: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('debit');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const handlePaymentMethodClick = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className="w-full bg-gray-100 py-6 flex justify-center">
        <div className="xl:w-11/12 w-full mx-auto">
            <div className="w-4/6 bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-500 p-4 rounded-lg">
                Room 1 2 adults, 1 double bed and 1 twin bed, Non-smoking
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <label htmlFor="first-name" className="block text-gray-700">
                    First name
                    </label>
                    <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="w-1/2">
                    <label htmlFor="last-name" className="block text-gray-700">
                    Last name
                    </label>
                    <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                </div>
                <div className="mb-4">
                <label htmlFor="mobile-number" className="block text-gray-700">
                    Mobile number
                </label>
                <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
                <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                    type="checkbox"
                    name="receiveAlerts"
                    checked={formData.receiveAlerts}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">
                    Receive text alerts about this trip.
                    </span>
                </label>
                </div>
            </form>
            </div>

            <div className="w-4/6 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white bg-blue-500 p-4 rounded-lg">
                Payment options
            </h3>
            <div className="mb-4 flex space-x-4">
                <button
                onClick={() => handlePaymentMethodClick('debit')}
                className={`px-4 py-2 ${paymentMethod === 'debit' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
                >
                Debit/Credit Card
                </button>
                <button
                onClick={() => handlePaymentMethodClick('paypal')}
                className={`px-4 py-2 ${paymentMethod === 'paypal' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
                >
                Paypal
                </button>
                <button
                onClick={() => handlePaymentMethodClick('bank')}
                className={`px-4 py-2 ${paymentMethod === 'bank' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
                >
                Bank transfer
                </button>
            </div>
            {paymentMethod === 'debit' && (
                <form onSubmit={handleSubmit}>
                <div className="mb-4 flex space-x-4 ">
                    <a href="#visa" onClick={() => handlePaymentMethodClick('visa')} className="block">
                    <img src={visa} alt="Visa" className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md" />
                    </a>
                    <a href="#mastercard" onClick={() => handlePaymentMethodClick('mastercard')} className="block">
                    <img src={mastercard} alt="Mastercard" className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md" />
                    </a>
                    <a href="#express" onClick={() => handlePaymentMethodClick('express')} className="block">
                    <img src={express} alt="American Express" className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md" />
                    </a>
                    <a href="#discover" onClick={() => handlePaymentMethodClick('discover')} className="block">
                    <img src={discover} alt="Discover" className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md" />
                    </a>
                </div>
                <div className="mb-4">
                    <label htmlFor="name-on-card" className="block text-gray-700">
                    Name on card
                    </label>
                    <input
                    type="text"
                    id="name-on-card"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="card-number" className="block text-gray-700">
                    Debit/Credit card number
                    </label>
                    <input
                    type="text"
                    id="card-number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                    <label htmlFor="expiration-month" className="block text-gray-700">
                        Expiration Date
                    </label>
                    <div className="flex space-x-2">
                        <select
                        id="expiration-month"
                        name="expirationMonth"
                        value={formData.expirationMonth}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                        <option value="" disabled>
                            Month
                        </option>
                        {/* Add options for months */}
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                            {i + 1}
                            </option>
                        ))}
                        </select>
                        <select
                        id="expiration-year"
                        name="expirationYear"
                        value={formData.expirationYear}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                        <option value="" disabled>
                            Year
                        </option>
                        {/* Add options for years */}
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={new Date().getFullYear() + i}>
                            {new Date().getFullYear() + i}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>
                </div>
                <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                    <label htmlFor="security-code" className="block text-gray-700">
                        Security Code
                    </label>
                    <input
                        type="text"
                        id="security-code"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div className="w-1/2">
                    <label htmlFor="billing-zip-code" className="block text-gray-700">
                        Billing Zip code
                    </label>
                    <input
                        type="text"
                        id="billing-zip-code"
                        name="billingZipCode"
                        value={formData.billingZipCode}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
                </form>
            )}
            {paymentMethod === 'paypal' && (
                <div>
                <h4>PayPal payment method selected.</h4>
                {/* Add PayPal form or instructions here */}
                </div>
            )}
            {paymentMethod === 'bank' && (
                <div>
                <h4>Bank transfer payment method selected.</h4>
                {/* Add bank transfer form or instructions here */}
                </div>
            )}
            </div>
        </div>
        </div>
    );
    };

    export default CheckOut;









import React, { useState } from 'react'
import Register from '../../assets/Register.png'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: "johnsmith@hubilo.com",
        firstName: "John",
        lastName: "Smith",
        companyName: "Business Company Name",
        phone: "(201) 555-0123",
        agree: true,
      });

  return (
    <div className="flex flex-row h-auto mt-8 mx-2 sm:mx-10 md:mx-30 justify-around">
        {/*RIght*/}
      <div className="p-2">
      <p className="text-[40px] font-semibold text-gray-700">See how your videos can </p>
      <p className="text-[40px] font-semibold mb-4 text-gray-700"> make your business <span className="text-orange-400">more $$$</span></p>
      <img src={Register} alt="" style={{maxWidth:"90%", height:"80%"}} />
      </div>
      
        {/*LEFT*/}
        <div>
        <div className="flex justify-center items-center mt-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Take the Full Media+ Tour
        </h2>

        {/* Business Email */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Business email</label>
          <input
            type="email"
            value={formData.email}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            disabled
          />
        </div>

        {/* First & Last Name */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
              disabled
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
              disabled
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Company name</label>
          <input
            type="text"
            value={formData.companyName}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Phone</label>
          <input
            type="text"
            value={formData.phone}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-6">
          <input type="checkbox" checked={formData.agree} className="w-4 h-4 accent-blue-600" />
          <span>
            I agree to Hubilo’s{" "}
            <a href="#" className="text-orange-500 font-medium">Terms of Service</a> and{" "}
            <a href="#" className="text-orange-500 font-medium">Privacy Policy</a>, which includes my consent to process my personal data.
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600">
          Get a free demo
        </button>
      </div>
    </div>
        </div>
    </div>
  )
}

export default RegisterForm

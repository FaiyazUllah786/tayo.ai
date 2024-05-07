import React, { useState } from "react";
import AddContact from "../components/Contacts/AddContact";
import AllContact from "../components/Contacts/AllContact";
import "../index.css";
import { hover } from "@testing-library/user-event/dist/hover";

const ContactPage = () => {
  const [showAddContact, setShowAddContact] = useState(true);

  return (
    <div className="flex flex-col justify-center text-center mt-10 relative">
      <div className="w-full flex flex-col items-center ">
        <div className=" p-2 rounded-md shadow-md mb-2 ">
          <button
            className={`text-xl text-white bg-slate-900 md:text-2xl font-semibold py-2 px-4 mb-2 md:mb-4 rounded-md focus:outline-none m-4 bg-glass border border-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ${
              showAddContact
                ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white bg-glass border border-white shadow-md shadow-slate-600"
                : "text-gray-800 hover:bg-pink-300"
            }`}
            onClick={() => setShowAddContact(true)}
          >
            Add Contact
          </button>
          <button
            className={`text-xl text-white bg-slate-900 md:text-2xl font-semibold py-2 px-4 mb-2 md:mb-4 rounded-md focus:outline-none m-4 bg-glass border border-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ${
              !showAddContact
                ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white bg-glass border border-white shadow-md shadow-slate-600"
                : "text-gray-800 hover:bg-pink-300"
            }`}
            onClick={() => setShowAddContact(false)}
          >
            View Contacts
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="p-5 glass-container">
          {showAddContact ? <AddContact /> : <AllContact />}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

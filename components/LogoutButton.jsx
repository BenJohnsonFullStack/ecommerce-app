import React from "react";

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        signOut();
      }}
    >
      <button className="bg-black text-white rounded-md px-4 py-1 mb-4 hover:bg-gray-700 transition-color duration-200">
        Log Out
      </button>
    </form>
  );
};

export default LogoutButton;

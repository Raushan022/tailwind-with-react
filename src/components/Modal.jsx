import React from "react";

export default function Modal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 bg-black/40">
      <div className="max-w-2xl p-4 bg-white rounded-lg shadow-lg grow">
        <div className="text-xl font-bold">Sign In</div>
        <div className="flex flex-wrap gap-4 px-4 py-4 my-3 -mx-4 border-y">
          <input
            placeholder="Username"
            className="px-2 py-1 border border-gray-600 rounded grow"
            type="text"
          />
          <input
            placeholder="Password"
            className="px-2 py-1 border border-gray-600 rounded grow"
            type="password"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 font-semibold bg-gray-300 rounded-md hover:bg-gray-400/80 active:bg-gray-400/60">
            Cancel
          </button>
          <button className="px-6 py-2 font-semibold bg-blue-300 rounded-md hover:bg-blue-400/80 active:bg-blue-400/60">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

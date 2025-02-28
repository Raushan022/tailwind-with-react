import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, setIsOpen, header, footer, children }) {
  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl p-4 bg-white rounded-lg shadow-lg grow"
      >
        {header}
        <div className="flex flex-wrap gap-4 px-4 py-4 my-3 -mx-4 border-y">
          {children}
        </div>
        {footer}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

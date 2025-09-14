import React from "react";

function PageWrapper({ children, title }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
      <div className="bg-white shadow rounded-xl p-6">{children}</div>
    </div>
  );
}

export default PageWrapper;

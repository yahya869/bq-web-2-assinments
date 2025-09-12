import React from "react";

function PageWrapper({ children, title }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-800 to-pink-900 p-6">
        {children}
    </div>
  );
}

export default PageWrapper;

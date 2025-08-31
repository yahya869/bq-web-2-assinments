// App.jsx

import FeedbackForm from "./compunents/FeedbackForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-900  p-6">
        <h1 className="text-2xl font-bold text-gray-500 mb-6 text-center">
          Web-App
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 mt-2">
        Student Feedback Portal
      </h1>
        </h1>
        <FeedbackForm/>
      </div>
  );
}

export default App;

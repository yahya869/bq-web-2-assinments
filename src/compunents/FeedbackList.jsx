// FeedbackList.jsx
function FeedbackList({ feedbacks, onEdit, onDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return (
      <p className="text-center text-gray-500 italic">
        No feedback available.
      </p>
    );
  }

  // Helper function: Star/Emoji rating display
  const renderRating = (rating) => {
    const emojis = ["😡", "😐", "🙂", "😃", "🤩"];
    return emojis[rating - 1] || "";
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {feedbacks.map((fb, index) => (
        <div
          key={index}
          className="bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
        >
          <p className="mb-2">
            <strong className="text-gray-700">Name:</strong> {fb.name}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Email:</strong> {fb.email}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Course:</strong> {fb.course}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Semester:</strong> {fb.semester}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Department:</strong>{" "}
            {fb.department}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Instructor:</strong>{" "}
            {fb.instructor}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Rating:</strong>{" "}
            <span className="text-lg">{renderRating(fb.rating)}</span> (
            {fb.rating})
          </p>
          <p className="mb-4">
            <strong className="text-gray-700">Feedback:</strong>{" "}
            {fb.feedbackText}
          </p>

          <div className="flex space-x-3">
            <button
              onClick={() => onEdit(index)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;

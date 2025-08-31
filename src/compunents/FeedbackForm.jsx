import { useState, useRef } from "react";
import FeedbackList from "./FeedbackList";

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    course: "",
    semester: "",
    department: "",
    instructor: "",
    rating: 0,
    feedbackText: "",
  });

  const [allFeedback, setAllFeedback] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [filter, setFilter] = useState("all");
  const [editIndex, setEditIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedFeedbacks = [...allFeedback];
      updatedFeedbacks[editIndex] = feedback;
      setAllFeedback(updatedFeedbacks);
      setEditIndex(null);
    } else {
      setAllFeedback((prev) => [...prev, feedback]);
    }

    setSubmitted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 3000);

    setFeedback({
      name: "",
      email: "",
      course: "",
      semester: "",
      department: "",
      instructor: "",
      rating: 0,
      feedbackText: "",
    });
  };

  const handleEdit = (index) => {
    setFeedback(allFeedback[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setAllFeedback(allFeedback.filter((_, i) => i !== index));
    }
  };

  const filteredFeedbacks = allFeedback.filter((fb) => {
    if (filter === "all") return true;
    if (filter === "4plus") return fb.rating >= 4;
    if (filter === "5") return fb.rating === 5;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      

      <p className="text-gray-600 text-center mb-4">
        📊 Total Feedbacks:{" "}
        <strong className="text-blue-500">{allFeedback.length}</strong>
      </p>

      {submitted && (
        <p className="text-green-600 font-semibold text-center mb-4">
          ✅ Feedback submitted successfully!
        </p>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 bg-gray-50 p-6 rounded-xl shadow"
      >
        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John"
            required
            value={feedback.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            value={feedback.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Course */}
        <div>
          <label className="block font-medium">Course</label>
          <input
            type="text"
            name="course"
            placeholder="Course Name"
            required
            value={feedback.course}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Semester */}
        <div>
          <label className="block font-medium">Semester</label>
          <select
            name="semester"
            value={feedback.semester}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          >
            <option value="">Select your Semester</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
            <option value="six">Six</option>
            <option value="seven">Seven</option>
            <option value="eight">Eight</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="block font-medium">Department</label>
          <select
            name="department"
            value={feedback.department}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          >
            <option value="">Select your Department</option>
            <option value="computer science">CS</option>
            <option value="software engineering">SE</option>
            <option value="artificial intelligence">AI</option>
          </select>
        </div>

        {/* Instructor */}
        <div>
          <label className="block font-medium">Instructor</label>
          <input
            type="text"
            name="instructor"
            placeholder="Instructor Name"
            required
            value={feedback.instructor}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Rating */}
        <div>
          <p className="font-medium">Give Rating:</p>
          <div className="flex gap-4 text-2xl">
            {[1, 2, 3, 4, 5].map((num) => (
              <label
                key={num}
                className="cursor-pointer flex flex-col items-center"
              >
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={feedback.rating === num}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={`${
                    feedback.rating === num ? "scale-125" : "opacity-50"
                  } transition-transform`}
                >
                  {["😡", "😐", "🙂", "😃", "🤩"][num - 1]}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Feedback Text */}
        <div>
          <label className="block font-medium">Feedback</label>
          <textarea
            name="feedbackText"
            placeholder="Your feedback here..."
            required
            cols={50}
            rows={5}
            value={feedback.feedbackText}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={editIndex !== null ? "bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" : "bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"}
        >
          {editIndex !== null ? "Update Feedback" : "Submit"}
        </button>
      </form>

      <hr className="my-6" />

      {/* Filter Section */}
      <h2 className="text-xl font-semibold mb-3">Feedback List</h2>
      <div className="mb-4">
        <label className="font-medium">Filter by Rating: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="ml-2 border p-2 rounded-lg"
        >
          <option value="all">Show All</option>
          <option value="4plus">4 ⭐ and Above</option>
          <option value="5">Only 5 ⭐</option>
        </select>
      </div>

      {filteredFeedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback submitted yet.</p>
      ) : (
        <FeedbackList
          feedbacks={filteredFeedbacks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default FeedbackForm;

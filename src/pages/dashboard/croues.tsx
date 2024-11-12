import { useState } from "react";

function Courses() {
  // State for course list
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Frontend Development with React.js",
      description:
        "Learn the fundamentals of frontend development using React.js, from basic components to advanced patterns.",
      duration: "3 Months",
      instructor: "John Doe",
    },
    {
      id: 2,
      name: "Backend Development with Node.js",
      description:
        "Understand backend development concepts using Node.js, including Express, MongoDB, and RESTful API creation.",
      duration: "4 Months",
      instructor: "Jane Smith",
    },
    {
      id: 3,
      name: "UI/UX Design Fundamentals",
      description:
        "Master the basics of UI/UX design, focusing on wireframing, prototyping, and user testing techniques.",
      duration: "2 Months",
      instructor: "Sarah Lee",
    },
  ]);

  // Join course toggle
  const [isJoining, setIsJoining] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  // Add new course toggle
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    duration: "",
    instructor: "",
  });

  // Handle save for new course
  const handleSave = () => {
    const newCourseData = {
      id: courses.length + 1,
      ...newCourse,
    };
    setCourses([...courses, newCourseData]);
    setIsJoining(false);
    setSelectedCourse(null);
    setNewCourse({ name: "", description: "", duration: "", instructor: "" });
  };

  // Handle join course
  const handleJoin = (course: any) => {
    setSelectedCourse(course);
    setIsJoining(true);
  };

  // Modal close handler
  const closeModal = () => {
    setIsJoining(false);
    setSelectedCourse(null);
    setNewCourse({ name: "", description: "", duration: "", instructor: "" });
  };

  return (
    <>
      <div className="lg:px-48 lg:py-5 p-5 mb-24">
        {/* Header Section */}
        <div className="w-full flex justify-between items-center mb-5">
          <div className="py-3 text-xl font-bold">Courses</div>
          <div
            onClick={() => setIsJoining(true)}
            className="py-3 text-blue-500 cursor-pointer"
          >
            Add New Course
          </div>
        </div>

        {/* Course List */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-zinc-200 border-2 rounded p-6 shadow"
            >
              <h3 className="font-semibold text-lg">{course.name}</h3>
              <p className="mt-2">{course.description}</p>
              <p className="mt-2 font-medium">Duration: {course.duration}</p>
              <p className="mt-2 font-medium">Instructor: {course.instructor}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleJoin(course)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Join Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Joining Course */}
        {isJoining && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Join Course: {selectedCourse?.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </div>
              <div className="grid gap-6">
                {/* Course Details */}
                <div>
                  <label className="font-semibold">Description:</label>
                  <p>{selectedCourse?.description}</p>
                </div>

                {/* Instructor */}
                <div>
                  <label className="font-semibold">Instructor:</label>
                  <p>{selectedCourse?.instructor}</p>
                </div>

                {/* Save Button */}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Join Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Courses;

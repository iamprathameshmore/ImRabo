import { useState } from "react";

function Project() {
  // State for project details
  const [projectName, setProjectName] = useState("Project Alpha");
  const [projectDescription, setProjectDescription] = useState(
    "This is a flagship project that aims to solve major challenges in the tech industry."
  );
  const [projectStatus, setProjectStatus] = useState("In Progress");
  const [projectStartDate, setProjectStartDate] = useState("2024-01-01");
  const [projectEndDate, setProjectEndDate] = useState("2024-12-31");

  // Tasks for the project
  const [tasks, setTasks] = useState([
    { id: 1, task: "Design UI/UX", assignedTo: "John Doe", status: "Completed" },
    { id: 2, task: "Setup Backend", assignedTo: "Jane Smith", status: "In Progress" },
    { id: 3, task: "Develop Frontend", assignedTo: "Sarah Lee", status: "Not Started" },
  ]);
  console.log(setTasks)

  // Edit mode toggling
  const [isEditing, setIsEditing] = useState(false);

  // Handle save
  const handleSave = () => {
    setIsEditing(false);
    // Perform save operation here (e.g., API call)
  };

  return (
    <>
      <div className="lg:px-48 lg:py-5 p-5 mb-24">
        {/* Page Header */}
        <div className="w-full flex justify-between items-center mb-5">
          <div className="py-3 text-xl font-bold">Project Details</div>
          <div className="py-3 text-blue-500 cursor-pointer">Link</div>
        </div>

        {/* Project Information */}
        <div className="bg-zinc-200 border-2 rounded p-6 mb-6">
          {/* Edit Toggle Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Project Details */}
          <div className="grid gap-6">
            {/* Project Name */}
            <div>
              <label className="font-semibold">Project Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                />
              ) : (
                <div className="mt-2">{projectName}</div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold">Description:</label>
              {isEditing ? (
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  rows={3}
                />
              ) : (
                <div className="mt-2">{projectDescription}</div>
              )}
            </div>

            {/* Project Status */}
            <div>
              <label className="font-semibold">Project Status:</label>
              {isEditing ? (
                <select
                  value={projectStatus}
                  onChange={(e) => setProjectStatus(e.target.value)}
                  className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </select>
              ) : (
                <div className="mt-2">{projectStatus}</div>
              )}
            </div>

            {/* Start and End Date */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Start Date */}
              <div>
                <label className="font-semibold">Start Date:</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={projectStartDate}
                    onChange={(e) => setProjectStartDate(e.target.value)}
                    className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  />
                ) : (
                  <div className="mt-2">{projectStartDate}</div>
                )}
              </div>

              {/* End Date */}
              <div>
                <label className="font-semibold">End Date:</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={projectEndDate}
                    onChange={(e) => setProjectEndDate(e.target.value)}
                    className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  />
                ) : (
                  <div className="mt-2">{projectEndDate}</div>
                )}
              </div>
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Tasks List */}
        <div className="bg-zinc-200 border-2 rounded p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Tasks</h3>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
              >
                <div>
                  <div className="font-semibold">{task.task}</div>
                  <div className="text-gray-500">Assigned to: {task.assignedTo}</div>
                </div>
                <div className="text-sm text-gray-600">{task.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

import { useState } from "react";

function Organization() {
  // State for organization details
  const [orgName, setOrgName] = useState("23BG (Bugs and Glitches)");
  const [orgDescription, setOrgDescription] = useState(
    "We build scalable digital solutions, focusing on innovation and user-centric design."
  );
  const [orgContact, setOrgContact] = useState("+123 456 7890");
  const [orgEmail, setOrgEmail] = useState("contact@23bg.com");
  const [orgAddress, setOrgAddress] = useState(
    "123, Startup Lane, Tech City, Innovation State"
  );

  // Projects and Teams data
  const projects = ["Project A", "Project B", "Project C"];
  const teams = ["Frontend Team", "Backend Team", "Design Team"];

  // Edit mode toggling
  const [isEditing, setIsEditing] = useState(false);

  // Handle save
  const handleSave = () => {
    setIsEditing(false);
    // Perform any save operation here (e.g., API call)
  };

  return (
    <>
      {/* Background Section with Logo */}
      <div className="relative w-full h-64 bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-5xl font-bold opacity-20">
            23BG
          </div>
        </div>
      </div>

      <div className="lg:px-48 lg:py-5 p-5 mb-24">
        {/* Header Section */}
        <div className="w-full flex justify-between items-center mb-5">
          <div className="py-3 text-xl font-bold">Organization Profile</div>
          <div className="py-3 text-blue-500 cursor-pointer">Link</div>
        </div>

        {/* Profile Information */}
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

          {/* Organization Details */}
          <div className="grid gap-6">
            {/* Organization Name */}
            <div>
              <label className="font-semibold">Organization Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                />
              ) : (
                <div className="mt-2">{orgName}</div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold">Description:</label>
              {isEditing ? (
                <textarea
                  value={orgDescription}
                  onChange={(e) => setOrgDescription(e.target.value)}
                  className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  rows={3}
                />
              ) : (
                <div className="mt-2">{orgDescription}</div>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Number */}
              <div>
                <label className="font-semibold">Contact Number:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={orgContact}
                    onChange={(e) => setOrgContact(e.target.value)}
                    className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  />
                ) : (
                  <div className="mt-2">{orgContact}</div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold">Email:</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={orgEmail}
                    onChange={(e) => setOrgEmail(e.target.value)}
                    className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  />
                ) : (
                  <div className="mt-2">{orgEmail}</div>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="font-semibold">Address:</label>
              {isEditing ? (
                <textarea
                  value={orgAddress}
                  onChange={(e) => setOrgAddress(e.target.value)}
                  className="w-full p-3 border rounded bg-gray-50 focus:outline-none"
                  rows={2}
                />
              ) : (
                <div className="mt-2">{orgAddress}</div>
              )}
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

        {/* Projects Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-200 border-2 h-24 p-3 rounded flex items-center justify-center"
              >
                {project}
              </div>
            ))}
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Teams</h2>
          <div className="grid gap-6">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-zinc-200 border-2 h-24 p-3 rounded flex items-center justify-center"
              >
                {team}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Organization;

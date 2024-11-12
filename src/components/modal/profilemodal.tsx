import { useState, ChangeEvent } from "react";

interface User {
  name: string;
  company: string;
  profilePicture: string;
}

interface ProfileModalProps {
  open: boolean;
  handleClose: () => void;
  user: User;
  handleUpdateProfile: (updatedUser: User) => void;
}

function ProfileModal({
  open,
  handleClose,
  user,
  handleUpdateProfile,
}: ProfileModalProps) {
  // State for managing the editable form fields
  const [editableName, setEditableName] = useState<string>(user.name);
  const [editableCompany, setEditableCompany] = useState<string>(user.company);
  const [editableProfilePicture, setEditableProfilePicture] = useState<string>(
    user.profilePicture
  );

  // Function to handle profile updates
  const handleSubmit = () => {
    handleUpdateProfile({
      name: editableName,
      company: editableCompany,
      profilePicture: editableProfilePicture,
    });
    handleClose(); // Close modal after update
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setEditableProfilePicture(URL.createObjectURL(file));
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 relative">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Profile</h2>
          <button onClick={handleClose} className="text-black text-lg">
            X
          </button>
        </div>

        <div className="mt-4 text-center">
          <img
            src={editableProfilePicture}
            alt="Profile"
            className="h-16 w-16 rounded-full mx-auto"
          />
          <div className="mt-4">
            {/* File Input for Profile Picture */}
            <input
              type="file"
              className="hidden"
              onChange={handleProfilePictureChange}
              id="profile-picture-upload"
              accept="image/*"
            />
            <label
              htmlFor="profile-picture-upload"
              className="text-blue-500 cursor-pointer"
            >
              Change Profile Picture
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              value={editableName}
              onChange={(e) => setEditableName(e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold">Company</label>
            <input
              type="text"
              value={editableCompany}
              onChange={(e) => setEditableCompany(e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            />
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;

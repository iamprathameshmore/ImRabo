import { useState } from "react";

// Type definitions for the team object
interface Team {
  id: number;
  name: string;
  description: string;
}

function Teams() {
  // State for managing teams
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "Frontend Team", description: "Handles all frontend tasks" },
    { id: 2, name: "Backend Team", description: "Responsible for server-side logic" },
    { id: 3, name: "Design Team", description: "Focuses on UI/UX" },
  ]);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  const [newTeamName, setNewTeamName] = useState<string>("");
  const [newTeamDescription, setNewTeamDescription] = useState<string>("");

  const [isAdding, setIsAdding] = useState<boolean>(false);

  // Handle adding a new team
  const handleAddTeam = () => {
    const newTeam: Team = {
      id: teams.length + 1,
      name: newTeamName,
      description: newTeamDescription,
    };
    setTeams([...teams, newTeam]);
    setNewTeamName("");
    setNewTeamDescription("");
    setIsAdding(false);
  };

  // Handle editing a team
  const handleEditTeam = (team: Team) => {
    setIsEditing(true);
    setEditingTeam(team);
    setNewTeamName(team.name);
    setNewTeamDescription(team.description);
  };

  const handleSaveEdit = () => {
    if (editingTeam) {
      setTeams(
        teams.map((team) =>
          team.id === editingTeam.id
            ? { ...team, name: newTeamName, description: newTeamDescription }
            : team
        )
      );
      setIsEditing(false);
      setEditingTeam(null);
      setNewTeamName("");
      setNewTeamDescription("");
    }
  };

  const handleDeleteTeam = (id: number) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  return (
    <>
      <div className="lg:px-48 lg:py-5 p-5 mb-24">
        {/* Page Header */}
        <div className="w-full flex justify-between items-center mb-5">
          <div className="py-3 text-xl font-bold">Teams</div>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Team
          </button>
        </div>

        {/* Teams List */}
        <div className="grid gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-zinc-200 border-2 p-5 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{team.name}</h3>
                <p className="text-gray-600">{team.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEditTeam(team)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTeam(team.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Team Modal */}
        {isAdding && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
              <h3 className="text-xl font-bold mb-4">Add New Team</h3>
              <input
                type="text"
                placeholder="Team Name"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                className="w-full p-3 border rounded mb-4"
              />
              <textarea
                placeholder="Team Description"
                value={newTeamDescription}
                onChange={(e) => setNewTeamDescription(e.target.value)}
                className="w-full p-3 border rounded mb-4"
                rows={3}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsAdding(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTeam}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add Team
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Team Modal */}
        {isEditing && editingTeam && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
              <h3 className="text-xl font-bold mb-4">Edit Team</h3>
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                className="w-full p-3 border rounded mb-4"
              />
              <textarea
                value={newTeamDescription}
                onChange={(e) => setNewTeamDescription(e.target.value)}
                className="w-full p-3 border rounded mb-4"
                rows={3}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Teams;

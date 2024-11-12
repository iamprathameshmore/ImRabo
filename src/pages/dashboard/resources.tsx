
// function Resources() {
//     return (
//       <>
        
//               <div className="lg:px-48 lg:py-5 p-5 mb-24">
//                <div className="w-full flex justify-between">
//                <div className="py-3">
//                   Docs
//                 </div>
//                <div className="py-3 text-blue-500">
//                   Link
//                 </div>
//                </div>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Devices</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Projects</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Events</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Logs</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Events</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Logs</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Events</div>
//                   <div className="bg-zinc-200 border-2 h-24 p-3 rounded">Logs</div>
                  
//                 </div>
//               </div>

          
  
              
           
//       </>
//     );
//   }
  
//   export default Resources;

import { useState } from "react";

function Resources() {
  // Sample data
  const [resources, setResources] = useState([
    "Devices",
    "Projects",
    "Events",
    "Logs",
    "Tasks",
    "Reports",
    "Analytics",
    "Meetings",
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newItem, setNewItem] = useState("");

  // Filtered list based on the search term
  const filteredResources = resources.filter((resource) =>
    resource.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setResources([...resources, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <>
      <div className="lg:px-48 lg:py-5 p-5 mb-24">
        {/* Header Section */}
        <div className="w-full flex justify-between items-center mb-5">
          <div className="py-3 text-xl font-bold">Resources</div>
          <div className="py-3 text-blue-500 cursor-pointer">Link</div>
        </div>

        {/* Search and Add Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-3 border rounded bg-gray-50 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Add Item Section */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add new resource"
              className="p-3 border rounded bg-gray-50 focus:outline-none"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button
              onClick={handleAddItem}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        {/* List of Resources */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className="bg-zinc-200 border-2 h-24 p-3 rounded flex items-center justify-between"
            >
              <span>{resource}</span>
            </div>
          ))}
          {filteredResources.length === 0 && (
            <div className="col-span-2 text-center text-gray-500">
              No resources found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Resources;

  
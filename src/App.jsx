import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const respons = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await respons.json();
      console.log(data);
      setUser(data[0]);
    }
    fetchData();
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          className="w-16 h-16 animate-spin"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-600">
      <div className="bg-black shadow-lg rounded-2xl p-8 w-96 text-center border border-yellow-300">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2">Web-App</h2>
        <h1 className="text-2xl font-semibold text-yellow-300 mb-6">
          Personal Card
        </h1>

        <div className="text-left space-y-2">
          <p>
            <span className="font-semibold text-gray-700">Name:</span>{" "}
            <span className="text-white"> {user.name} </span>
          </p>
          <p>
            <span className="font-semibold text-gray-700">Email:</span>{" "}
            <span className="text-white">  {user.email} </span>
          
          </p>
          <p>
            <span className="font-semibold text-gray-700">Username:</span>{" "}
            <span className="text-white"> {user.username} </span>
            
          </p>
          <p>
            <span className="font-semibold text-gray-700">Phone:</span>{" "}
            <span className="text-white">{user.phone}</span>
            
          </p>
          <p>
            <span className="font-semibold text-gray-700">Address:</span>{" "}
            <span className="text-white"> {user.address.city}, {user.address.street} </span>
           
          </p>
          <p>
            <span className="font-semibold text-gray-700">Company:</span>{" "}
            <span className="text-white"> {user.company.name}</span>
            
          </p>
          <p>
            <span className="font-semibold text-gray-700">Website:</span>{" "}
            <a
              href={`https://${user.website}`}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

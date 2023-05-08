import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const index = () => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get all Restaurants
  useEffect(() => {
    axios
      .get("http://localhost:8080/restaurants")
      .then((response) => {
        setBusinesses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen mt-">
      <h1 className=" text-center pt-5 text-4xl font-bold text-gray-800 tracking-tight leading-tight md:text-5xl md:leading-tight">
        Welcome to the Marketplace
      </h1>

      {/* Add business button */}
      <div className="max-w-2xl mx-auto mt-5">
        <input
          type="text"
          className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search businesses..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />

        <Link
          to="/business-add"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Add Business
        </Link>
      </div>

      <div className="max-w-2xl mx-auto mt-5">
        {filteredBusinesses.length === 0 ? (
          <p className="text-center">No businesses found.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {filteredBusinesses.map((business) => (
              <li key={business.id} className="py-4">
                <Link
                  to={`/business/${business.id}`}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={business.image}
                      alt=""
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-medium">{business.name}</h2>
                    <p className="text-gray-500">{business.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default index;

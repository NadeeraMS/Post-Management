import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

const index = () => {
  const navigate = useNavigate();

  // Get business ID from URL
  const { id } = useParams();

  const [business, setBusiness] = useState(null);

  // Delete business
  const deleteBusiness = () => {
    axios
      .delete(`${BASE_URL}/restaurants/${id}`)
      .then((response) => {
        console.log(response);
        navigate("/marketplace");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants/${id}`)
      .then((response) => {
        setBusiness(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="bg-blue-100 min-h-screen p-12">
      {(business && (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto pt-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {business.name}
          </h1>
          <img
            src={business.image}
            alt={business.name}
            className="w-full rounded-lg mb-4 h-64 object-cover"
          />
          <p className="mb-6 text-lg text-gray-700">{business.description}</p>
          <div className="flex flex-wrap mb-4">
            <p className="text-gray-700 mr-4">
              <span className="font-bold">Location:</span> {business.address}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Website:</span>{" "}
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {business.website}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap mb-4">
            <p className="text-gray-700 mr-4">
              <span className="font-bold">Contact:</span> {business.mobile}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Type:</span> {business.type}
            </p>
          </div>
        </div>
      )) || (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto pt-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Loading...</h1>
        </div>
      )}

      {/* Edit business button */}
      <div className="max-w-2xl mx-auto mt-5 flex gap-4">
        <Link
          to={`/business-edit/${id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Edit Business
        </Link>

        {/* Delete business button */}
        <button
          onClick={deleteBusiness}
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Delete Business
        </button>
      </div>
    </div>
  );
};

export default index;

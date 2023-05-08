import React, { useState } from "react";
import axios from "axios";
import makeToast from "../../components/toast";
import { useNavigate } from "react-router-dom";
import storage from "../../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

const index = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState("");
  const [menu, setMenu] = useState([]);
  const [businessHours, setBusinessHours] = useState("");

  const clearForm = () => {
    setName("");
    setType("");
    setDescription("");
    setImage("");
    setAddress("");
    setMobile("");
    setWebsite("");
    setMenu([]);
    setBusinessHours("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      type,
      description,
      image,
      address,
      mobile,
      website,
      menu,
      businessHours,
    };

    axios
      .post(`${BASE_URL}/restaurants`, data)
      .then((response) => {
        console.log(response);
        makeToast({ type: "success", message: "Business added successfully!" });
        navigate("/marketplace");
      })
      .catch((error) => {
        console.log(error);
        makeToast({ type: "error", message: "Error adding business!" });
      });

   
  };

  // Set menu items
  const handleMenuChange = (event) => {
    const menuItems = event.target.value.split(",").map((item) => item.trim());
    setMenu(menuItems);
  };

	// Firebase Image Upload
  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file to upload!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update upload progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
        });
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-center text-3xl font-extrabold text-gray-900 mt-5 mb-5">
        Add Business
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md bg-white p-10">
          <div className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div className="col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            {/* Type */}
            <div className="col-span-1">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <input
                type="text"
                required
                name="type"
                id="type"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
            </div>

            {/* Description */}
            <div className="col-span-1">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                required
                name="description"
                id="description"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            {/* Image */}
            <div className="col-span-1">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                required
                name="image"
                id="image"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={(event) => setFile(event.target.files[0])}
              />
              <button
                type="button"
                className="inline-flex items-center px-1 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-2"
                onClick={handleUpload}
              >
                {/* emoji */}
                Upload
              </button>
              {/* {percent > 0 && (
                <div className="mt-2">
                  <progress value={percent} max="100" />
                </div>
              )} */}

              {percent > 0 && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full my-2"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Address */}
            <div className="col-span-1">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                required
                name="address"
                id="address"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>

            {/* Mobile */}
            <div className="col-span-1">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile
              </label>
              <input
                type="text"
                required
                name="mobile"
                id="mobile"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />
            </div>

            {/* Website */}
            <div className="col-span-1">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700"
              >
                Website
              </label>
              <input
                type="text"
                required
                name="website"
                id="website"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

            {/* Menu Items */}
            <div className="col-span-1">
              <label
                htmlFor="menu"
                className="block text-sm font-medium text-gray-700"
              >
                Menu Items (separate by comma)
              </label>
              <input
                type="text"
                required
                name="menu"
                id="menu"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                // value={menu}
                onChange={(event) => handleMenuChange(event)}
              />
            </div>

            {/* Business Hours */}
            <div className="col-span-1">
              <label
                htmlFor="businessHours"
                className="block text-sm font-medium text-gray-700"
              >
                Business Hours
              </label>
              <input
                type="text"
                required
                name="businessHours"
                id="businessHours"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={businessHours}
                onChange={(event) => setBusinessHours(event.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;

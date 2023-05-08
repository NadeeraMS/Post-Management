import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LocationIcon from '../../assets/Images/LocationIcon.png';
import ImageIcon from '../../assets/Images/ImageIcon.png';
import storage from "../../utils/firebaseConfig";
import Header from "../home/Header";
import Slide from "../home/slide_bar";

const BASE_URL = import.meta.env.VITE_BACKEND_API;


const index = () => {
  //const navigate = useNavigate();
  const { id } = useParams();

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  //const []=useState(""); //date created at

  const clearForm = () => {
    setTitle,
      setDescription,
      setImage,
      setLocation
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const data = {
      title,
      description,
      image,
      location,
    };

    axios
      .patch(`${BASE_URL}/posts/${postId}`, data)
      .then((response) => {
        console.log(response);
        makeToast({ type: "success", message: "Post Updated!" });
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        makeToast({ type: "error", message: "Error adding business!" });
      });

    console.log("Submitted");

    clearForm();
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

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants/${id}`)
      .then((response) => {
        console.log(response);
        const posts = response.data;
        setPostId(posts.id);
        setTitle(posts.title);
        setDescription(posts, description);
        setImage(posts.image);
        setLocation(posts.location);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col  relative block overflow-hidden 
    rounded-lg border border-gray-100 p-4  lg:p-8 ">
      <h1 className="text-center text-3xl font-extrabold mt-16 text-gray-900">
        Edit Post
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md bg-white p-10 ">
          <div className="grid grid-cols-1 gap-6 ">
            <div className="col-span-1">
              {/* profile name and pic */}
              <div className=" p-4 mt-2 ml-12 ">
                <img className="rounded-full"
                  src="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
                  alt="avatar"
                  width={40}
                  height={40}
                  layout="fixed">
                </img>
              </div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={title}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            {/* Description */}
            <div className="col-span-1">
              <label
                htmlFor="type"
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
                onChange={(event) => setType(event.target.value)}
              />


              {/* Image */}
              <div className="col-span-1">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                </label>

                <label htmlFor="fileInput" class="inline-block rounded border border-indigo-600 
              text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white 
              focus:outline-none focus:ring active:bg-indigo-500 mb-4"
                >
                  <img src={ImageIcon} style={{ width: "35px", display: "inline", }} />
                  <p style={{ display: "inline", marginRight: "10px", marginLeft: "5px" }}>Image</p>
                </label>

                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  onChange={(event) => setFile(event.target.files[0])}
                />
                <button
                  type="button"
                  // style={{backgroundColor: "green"}}
                  className="inline-flex items-center  border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 
                hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ml-2 mt-3.5 px-1 py-1"
                  onClick={handleUpload}
                >

                  Upload
                </button>

                {percent > 0 && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full my-2"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                )}

                {/* location */}
                <div class='inline-block ml-6'>
                  <label style={{ border: "solid 1px", borderRadius: "20px" }} htmlFor="locationInput" class=" ml-4 border-gray-200 inline-block rounded-full  pe-10 shadow-sm sm:text-sm">
                    <img src={LocationIcon} class="w-9 inline-block ml-4" />
                    <input style={{ border: "0px" }} type="text" placeholder="location" id="locationInput" onChange={(event) => setLocation(event.target.value)} />
                  </label>
                </div>

              </div>
            </div>
            <div className="col-span-1">
              <button
                style={{ float: "right", backgroundColor: "green" }}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Post
              </button>

            </div>
          </div>
        </div>


      </form>

      <Header /><br></br>
      <Slide />
    </div>
  )
}

export default index

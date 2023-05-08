import React, { useRef, useState } from 'react'
// import {VideoCameraIcon} from "heroicons-react/";
// import {useSession} from next/auth
import "./index.css";
import Header from '../home/Header';
import Slide from '../home/slide_bar'
import ImageIcon from '../../assets/Images/ImageIcon.png';
// import VideoIcon from '../../assets/Images/VideoIcon.png';
import LocationIcon from '../../assets/Images/LocationIcon.png';
import storage from "../../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const BASE_URL = import.meta.env.VITE_BACKEND_API;

const index = () => {
  // const [session]={useSession}
  // const inputRef = useRef(null);
  // const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

 // const [postId, setPostId]=useState("");
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [location,setLocation]=useState("");
 // const [userID, setUserID] = useState('001');//Authentication eken userID eka gnna.

  const clearForm =()=>{
  setTitle,
  setDescription,
  setImage,
  setLocation
}

const handlePost = (event) => {
  event.preventDefault();
  const data = {
  title,
  description,
  image,
  location,
}
axios
.patch(`${BASE_URL}/posts/`, data)
.then((response) => {
 console.log(response);
 makeToast({ type: "success", message: "Post added successfully!" });
 //navigate("/");
})
.catch((error) => {
  console.log(error);
  makeToast({ type: "error", message: "Error adding post!" });


});
console.log("Submitted");
clearForm();

}
  //upload image to firebase
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

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {

        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setImgUrl(url);
          sendPost(url);
        });
      }
    );
    sendPost();
  }

  // function sendPost(event) {
  //   event.preventDefault();
  //   const post = { userID, status, imgUrl };

  // const sendPost = (url) => {
  //   const post = { userID, title, description, imgUrl: url, location };

  //   axios.post('http://localhost:8080/posts', post)
  //   then((res) => {
  //     console.log(res)
  //     window.alert("Post Added")
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleUpload();
  // };
  return (
    <div className="w-2/5 mx-96  mt-28  p-2 rounded-2xl shadow-md text-gray-500
      font-medium  py-6 flex flex-col justify-center
      " >
      <div className=" flex space-x-4 p-4 items-center ">
        <img className="rounded-full"
          src="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
          alt="avatar"
          width={40}
          height={40}
          layout="fixed">
        </img>
      </div>  

      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md bg-white p-10 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8" >
          <div className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div className="col-span-1">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                required
                name="title"
                id="title"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
              </label>
           
              <label htmlFor="fileInput" class="inline-block rounded border border-indigo-600 
              text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white 
              focus:outline-none focus:ring active:bg-indigo-500"
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
                // class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white 
                // focus:outline-none focus:ring active:text-opacity-75 ml-2.5 px-1 py-1"
                className="inline-flex items-center  border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 
                hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ml-1 mt-3 px-1 py-1"
                onClick={handleUpload}
              >
                {/* emoji */}
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
            <div class='inline-block mr-2.5'>
              <label style={{border : "solid 1px", borderRadius: "20px"}} htmlFor="locationInput" class=" ml-3.5 border-gray-200 inline-block rounded-full  pe-10 shadow-sm sm:text-sm">
                    <img src={LocationIcon} class="w-9 inline-block ml-4" />
                    <input style={{border: "0px"}} type="text" placeholder="location" id="locationInput" onChange={(event) => setLocation(event.target.value)}/>      
              </label>
             </div>

            </div>

           


            {/* Submit Button */}
            <div className="col-span-1">
              <button
              style={{float:"right", backgroundColor :"green"}}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Post
              </button>

            </div>
        </div>

       
      

      </div>
      </form>
      <Header/>
      <Slide/>
    </div>

  )
  
}

export default index

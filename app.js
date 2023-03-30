import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import reactS3 from "react-s3";

const config = {
  bucketName: "manish443projects",
  region: "us-east-2",
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
};

const App = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');

  const Uplode = (e) => {
    const file = e.target.files[0];
    console.log(file);
    reactS3
      .uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    // setSelectedFile(file);
    // setErrorMessage('');
  };
  return (
    <>
      <h1>Uplode File </h1>
      <input type="file" accept="video/*" onChange={Uplode} />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());

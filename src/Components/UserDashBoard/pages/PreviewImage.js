import React, { useState } from "react";

const PreviewImage = ({ file }) => {
  console.log(file);
  const [preview, setPreview] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-wq5bwwbn0cFhs2F4nWn1ZGgOrsNG3JKbQ&usqp=CAU"
  );
  const reader = new FileReader();
  if (file && file.type.match("image.*")) {
    reader.readAsDataURL(file);
  }

  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div>
      <img src={preview} className="display_image" alt="user image" />
    </div>
  );
};

export default PreviewImage;

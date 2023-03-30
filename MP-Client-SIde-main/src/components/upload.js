import React from "react";
import VideoInput from "./VideoInput";
import "./styles.css";

export default function Upload() {
  return (
    <div className="Upload1">
      <h1>Video Upload</h1>
      <VideoInput width={500} height={500} />
    </div>
  );
}

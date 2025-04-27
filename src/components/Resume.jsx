import React from "react";

function Resume() {
  return (
    <div className="w-full h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My Resume</h1>

      <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "80vh" }}
      />
    </div>
  );
}

export default Resume;

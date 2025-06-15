import React, { useCallback, useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function FileUploader() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback((filesList) => {
    const selected = Array.from(filesList);
    setFiles((prev) => [...prev, ...selected]);
  }, []);

  const onChange = useCallback(
    (e) => {
      handleFiles(e.target.files);
    },
    [handleFiles]
  );

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div
        className={`relative flex flex-col items-center justify-center gap-4 p-10 border-4 border-dashed rounded-3xl cursor-pointer shadow-lg transition-colors duration-200 ${
          dragging ? "border-blue-500 bg-blue-50/50" : "border-gray-300 bg-white/70 backdrop-blur-md hover:border-blue-400"
        }`}
        onClick={openFileDialog}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          onChange={onChange}
          className="hidden"
        />
        <ArrowUpTrayIcon className="w-14 h-14 text-blue-500" />
        <p className="text-gray-700 font-medium">
          Drag & drop files here or <span className="text-blue-600 underline">browse</span>
        </p>
      </div>
      {files.length > 0 && (
        <ul className="mt-2 text-left list-disc list-inside text-sm">
          {files.map((f, idx) => (
            <li key={idx}>{f.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FileUploader;

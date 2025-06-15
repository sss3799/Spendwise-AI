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
    <div className="space-y-4">
      <div
        className={`relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-200 ${dragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:border-blue-400"}`}
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
        <ArrowUpTrayIcon className="w-12 h-12 text-gray-400 mb-2" />
        <p className="text-gray-600">
          Drag & drop files here or <span className="text-blue-500 underline">browse</span>
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

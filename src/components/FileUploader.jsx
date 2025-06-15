import React, { useCallback, useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useProcess } from "../context/ProcessContext";

function FileUploader({ onFilesChange }) {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);
  const { setIsProcessed } = useProcess();

  const handleFiles = useCallback(
    (filesList) => {
      const selected = Array.from(filesList);
      setFiles((prev) => {
        const updated = [...prev, ...selected];
        if (onFilesChange) {
          onFilesChange(updated);
        }
        return updated;
      });
      setIsProcessed(false);
    },
    [setIsProcessed]
  );

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 w-full max-w-md mx-auto"
    >
      <div
        className={`relative flex flex-col items-center justify-center gap-4 p-10 border-4 border-dashed rounded-3xl cursor-pointer shadow-lg transition-colors duration-200 ${
          dragging
            ? "border-purple-500 bg-purple-50/50 dark:bg-gray-700/50"
            : "border-gray-300 dark:border-gray-600 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-md hover:border-purple-400"
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
        <ArrowUpTrayIcon className="w-14 h-14 text-purple-500" />
        <p className="text-gray-700 dark:text-gray-200 font-medium">
          Drag & drop files here or <span className="text-purple-600 underline">browse</span>
        </p>
      </div>
      {files.length > 0 && (
        <ul className="mt-2 text-left list-disc list-inside text-sm">
          {files.map((f, idx) => (
            <li key={idx}>{f.name}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default FileUploader;

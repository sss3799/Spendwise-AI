import React, { useCallback, useState } from "react";

function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleFiles = useCallback((e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
  }, []);

  return (
    <div className="border-2 border-dashed border-gray-300 p-6 rounded-md text-center">
      <input
        type="file"
        multiple
        onChange={handleFiles}
        className="mb-4"
      />
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

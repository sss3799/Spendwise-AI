import React, { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";
import { motion } from "framer-motion";

function LoadingIndicator() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 10));
    }, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-xs mx-auto"
    >
      <Progress.Root
        value={progress}
        className="h-3 w-full bg-gray-200 rounded-full overflow-hidden"
      >
        <Progress.Indicator
          style={{ width: `${progress}%` }}
          className="bg-purple-600 h-full transition-all"
        />
      </Progress.Root>
      <p className="mt-2 text-sm text-center text-gray-700">Loading...</p>
    </motion.div>
  );
}

export default LoadingIndicator;

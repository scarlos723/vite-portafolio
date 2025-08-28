import { motion, type MotionStyle } from "framer-motion";
import { useEffect, useState, type JSX } from "react";

const StarsBg = (color: MotionStyle) => {
  const [list, setList] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const auxlist = [];
    for (let i = 0; i < 100; i++) {
      auxlist.push(
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            color: color.color,
          }}
        >
          •
        </motion.div>
      );
    }
    setList(auxlist);
  }, [color]);
  return (
    <div className="absolute top-0 z-1 w-full h-[100vh]">
      {list.map((star) => star)}
    </div>
  );
};

export default StarsBg;

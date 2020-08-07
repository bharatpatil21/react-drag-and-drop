import React from "react";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

function Knight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <span
      ref={drag}
      style={{
        fontSize: "40px",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        fontWeight: "bold",
      }}
    >
      ♘
    </span>
  );
}
export default Knight;

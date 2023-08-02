import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard ");
      } catch (error) {
        toast.error("failed to copy color to clipboard ");
      }
    } else {
      toast.error("clipboard access is not available");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;

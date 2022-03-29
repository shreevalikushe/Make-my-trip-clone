import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./pagination.module.css";

const st = {
  width: "50%",
  margin: "auto",
  // border:"1px solid red"
};

export default function PaginationOutlined() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const [travellers, setTravellers] = useState(1);
  const [openTravellers, setOpenTravellers] = useState(false);
  return (
    <div>
      <div onClick={() => setOpenTravellers(!openTravellers)}>
        {travellers} {travellers > 1 ? "Travellers" : "Traveller"}
      </div>
      <div className = {openTravellers ? styles.container  :styles.noDispaly}>
        {arr.map((val) => (
          <button onClick={() => setTravellers(val)}>{val}</button>
        ))}
      </div>
      <button onClick={() => setOpenTravellers(!openTravellers)}>Apply</button>
    </div>
  );
}


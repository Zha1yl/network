import { Pagination } from "@mui/material";
import React from "react";

const PaginationControl = ({ count, page, handleChange }) => {
  return (
    <div>
      <p>Страница: {page}</p>
      <Pagination count={count} color="primary" onChange={handleChange} />
    </div>
  );
};

export default PaginationControl;

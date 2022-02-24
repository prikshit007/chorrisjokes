
import React from "react";

export const Category = (props) => {
  return (
    <button className="btn btn-primary" onClick=
    {(e)=>props.selectCategoryHandler(e,props.category)}>
      {props.category.toUpperCase()}
    </button>
  );
};

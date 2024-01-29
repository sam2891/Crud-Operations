import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { baseURL } from "../utils/constant";
import axios from "axios";

const List = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };
  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEditAlt
          className="icon"
          color="black"
          onClick={() => updateMode(id, task)}
        />
        <BsTrash className="icon" color="skyblue" onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;

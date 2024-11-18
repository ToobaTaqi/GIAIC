"use client";
import { useState } from "react";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface task {
  text: string;
  checked: boolean;
}

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<task[]>([]);

  const addTask = (e: any) => {
    e.preventDefault();
    console.log("task:", task.trim()); //

    task.trim() !== ""
      ? setList([...list, { text: task.trim(), checked: false }])
      : alert("Please Add some task");

    console.log(list);
    setTask("");
  };

  const handleCheckbox = (index: number) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
    console.log(list);
  };

  const deleteTask = (index: number) => {
    // syntax: array.filter(function(currentValue, index, arr), thisValue)
    setList(list.filter((task, i) => i !== index));
    console.log(list);
  };

  const updateTask = (index: number) => {
    const editedTask = prompt("Update Task:", list[index].text); 
    if (editedTask && editedTask.trim() !== "") {
      const newList = [...list];
      newList[index].text = editedTask.trim(); 
      setList(newList);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />

      <form className="flex gap-2">
        <input
          type="text"
          className="border"
          placeholder=" Enter new Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="hover:text-white hover:bg-[#e5c6ff] "
        >
          Add
        </button>
      </form>

      <div>
        {list.map((item, index) => (
          <div
            key={index}
            className={`py-3 px-5  my-4 border-gray-600 rounded-lg flex gap-3 items-center ${
              item.checked ? "bg-[#bda4fe] border-0" : "bg-[#e5c6ff] border-4"
            }`}
          >
            <input
              className="rounded-lg"
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckbox(index)}
            />
            <p className={`${item.checked ? "line-through" : "text-white"}`}>
              {item.text}
            </p>
            <button onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} style={{ color: "#e5c6ff" }} />
            </button>
            <button onClick={() => updateTask(index)}>
              <FontAwesomeIcon icon={faEdit} style={{ color: "#e5c6ff" }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

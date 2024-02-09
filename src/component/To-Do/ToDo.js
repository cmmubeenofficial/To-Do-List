import React, { useEffect, useState } from "react";
import "./todo.css";

// to get value from localStorage
const localStorageData = () => {
  const lists = localStorage.getItem("toDoList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(localStorageData());
  const [isItemEdited, setIsItemEdited] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);

  // add items to an array with a unique id
  let addItems = () => {
    if (!inputData) {
      alert("please input data");
    } else if (inputData && toggleBtn) {
      setItems(
        items.map((curElm) => {
          if (curElm.id === isItemEdited) {
            return { ...curElm, name: inputData };
          }
          return curElm;
        })
      );
      setInputData("");
      setIsItemEdited(null);
      setToggleBtn(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // edit functionality
  const editItem = (index) => {
    const edited_todo_item = items.find((curElm) => {
      return curElm.id === index;
    });

    setInputData(edited_todo_item.name);
    setIsItemEdited(index);
    setToggleBtn(true);
  };

  // delete functionality
  const deleteItem = (index) => {
    const updatedItem = items.filter((curElm) => {
      return curElm.id !== index;
    });
    setItems(updatedItem);
  };

  // this will empty the array
  const removeAll = () => {
    setItems([]);
  };

  // to store values in localStorage
  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todolog" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item..."
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleBtn ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
          </div>

          {/* show our items */}

          {items.map((curElm) => {
            return (
              <div className="showItems" key={curElm.id}>
                <div className="eachItem">
                  <h3>{curElm.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElm.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElm.id)}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}

          {/* remove all buttons */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;

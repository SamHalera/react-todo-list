import { useState } from "react";
import CreateTask from "./CreateTask";
import Item from "./Item";
const ListOfTasks = ({
  name,
  items,
  setItems,
  inputValue,
  setInputValue,
  error,
  setError,
  onSubmit,
  isAddTask,
  setIsAddTask,
}) => {
  const [isOptions, setIsOptions] = useState(false);

  //create an array that contains all the possible tasks marked as done
  const itemsChecked = items.filter((item, index) => {
    if (item.isChecked === true) {
      return item;
    }
  });
  return (
    <div className="one-list-container">
      <div className="list-card">
        <div className="head-card">
          <h3>{name}</h3>
          <p>
            <i className="fas fa-hourglass-half"></i>(DUE DATE : due-date)
          </p>
          <p className="color-primary">
            <i className="fas fa-list-ul"> </i>
            {items.length} Tasks
          </p>
        </div>
        {!isAddTask && (
          <i
            onClick={() => {
              setIsAddTask(true);
            }}
            className="btn-new-task fas fa-plus"
          ></i>
        )}
      </div>
      {isAddTask && (
        <div className="todo-list">
          <CreateTask
            name={name}
            title="Add a new tasks"
            itemsToCreate={items}
            setter={setItems}
            inputValue={inputValue}
            setInputValue={setInputValue}
            error={error}
            setError={setError}
            onSubmit={onSubmit}
            textAreaValue="Notes"
          />

          {/* Display all the items that are not marked as done ==> items.isChecked is false */}
          <div className="item-list">
            {items.map((item, index) => {
              if (!item.isChecked) {
                return (
                  <Item
                    key={item.name + index}
                    item={item.name}
                    index={index}
                    items={items}
                    setItems={setItems}
                    checked={item.isChecked}
                    // isOptions={isOptions}
                    setIsOptions={setIsOptions}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>

          {/* Display all the items that are marked as done ==> items.isChecked is true */}
          {itemsChecked.length > 0 && (
            <div className="items-done">
              <h2>Tasks done</h2>
              {itemsChecked.map((item, index) => {
                return (
                  <Item
                    key={item.name + index}
                    item={item.name}
                    index={index}
                    items={items}
                    setItems={setItems}
                    checked={item.isChecked}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default ListOfTasks;

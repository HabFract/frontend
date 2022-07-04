// #region Global Imports
import React, { useState, useEffect } from "react";
// #endregion Global Imports

// #region Local Imports
import { ListItem } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { ITodoItem } from './types'
// #endregion Interface Imports

export const TodoItem: React.FC<ITodoItem.IProps> = ({
  todo,
  handleDestroy,
  handleToggle,
}) => {
  const [isComplete, setIsComplete] = useState<boolean>(todo.status);
  useEffect(() => {
    setIsComplete(todo.status);
  }, [todo.status]);

  return (
    <ListItem
      complete={isComplete}
      data-todo_id={todo.id}
    >
      <label className={isComplete ? "complete" : "incomplete"}>
        {todo.description}
        <input
          type="checkbox"
          onClick={handleToggle}
          data-testid={`toggle-${todo.id}`}
          defaultChecked={isComplete}
        />
      </label>
      <button
        type="button"
        data-testid={`delete-${todo.id}`}
        onClick={handleDestroy}
        className="destroy"
      />
    </ListItem>
  );
};

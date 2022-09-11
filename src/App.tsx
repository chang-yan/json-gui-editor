import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";
import NavBar from "./components/NavBar";
import DraggableUI from "./components/DraggableUI";
import { ComponentType } from "./utils/type";

const initList = [
  {
    id: "1",
    task: "Eat breakfast",
  },
  {
    id: "2",
    task: "Take shower",
  },
  {
    id: "3",
    task: "write homework",
  },
  {
    id: "4",
    task: "Go jogging",
  },
];

function App() {
  const [todos, setTodos] = useState(initList);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const tempList = Array.from(todos);
    const [newOrder] = tempList.splice(source.index, 1);
    tempList.splice(destination.index, 0, newOrder);

    setTodos(tempList);
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 gap-5 py-4 px-4">
        <div className="px-4 py-4 bg-gray-50 rounded-lg col-span-2 overflow-auto">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todo">
              {(provided, droppableSnapshot) => {
                return (
                  <div
                    className="todo"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {todos.map((todo, index) => {
                      const { id, task } = todo;
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <DraggableUI
                                componentType={ComponentType.TextField}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="px-4 py-4 rounded-lg">json region</div>
      </div>

      <div></div>
    </>
  );
}

export default App;

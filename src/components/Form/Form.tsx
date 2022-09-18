import React, { useEffect } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { PlusIcon } from "@heroicons/react/24/outline";

import DraggableUI from "../DraggableUI";
import { UIType, UIValue } from "../../utils/type";

const initList: UIValue[] = [
  {
    key: "Eat breakfast",
    label: "吃早餐",
    type: UIType.TextField,
  },
  {
    key: "Take shower",
    label: "洗澡",
    type: UIType.TextField,
  },
  {
    key: "Write homework",
    label: "寫作業",
    type: UIType.TextField,
  },
  {
    key: "Go jogging",
    label: "慢跑",
    type: UIType.TextField,
  },
];

const Form = () => {
  const method = useForm<{
    component: UIValue[];
  }>({
    defaultValues: {
      component: initList,
    },
    mode: "onBlur",
  });

  const { handleSubmit, control, reset } = method;

  const { fields, append, swap } = useFieldArray({
    control,
    name: "component",
  });

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    swap(source.index, destination.index);
  };

  const onSubmit = (data: any) => console.log("data", data);

  useEffect(() => {
    reset({
      component: initList,
    });
  }, [reset]);

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-5 py-4 px-4">
          <div className="px-4 py-4 bg-gray-50 rounded-lg col-span-2 overflow-auto">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="component">
                {(provided, droppableSnapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {fields.map((item, index) => {
                      return (
                        <DraggableUI
                          key={item.id} // better has a key for list component
                          defaultValue={item}
                          index={index}
                          name="component"
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button
              type="button"
              className="m-4 p-2 flex ring-stone-300 ring-2 hover:bg-stone-200 rounded-lg"
              onClick={() => {
                append({
                  key: "",
                  label: "",
                  type: UIType.TextField,
                });
              }}
            >
              <PlusIcon className="w-6" />
              add
            </button>
          </div>
          <div className="px-4 py-4 rounded-lg">json region</div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;

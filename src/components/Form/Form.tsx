import React, { useEffect } from "react";
import { useForm, useFieldArray, FormProvider, useWatch } from "react-hook-form";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import JSONPretty from "react-json-pretty";
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

const FIELD_NAME = "components";

const Form = () => {
  const method = useForm<{
    [FIELD_NAME]: UIValue[];
  }>({
    defaultValues: {
      [FIELD_NAME]: initList,
    },
    mode: "onBlur",
    shouldUnregister: true,
  });

  const { handleSubmit, control, reset } = method;

  const { fields, append, move, remove } = useFieldArray({
    control,
    name: FIELD_NAME,
  });

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    move(source.index, destination.index);
  };

  const onDelete = (index: number) => () => {
    remove(index);
  };

  const onSubmit = (data: any) => console.log("data123", data);

  useEffect(() => {
    reset({
      [FIELD_NAME]: initList,
    });
  }, []);

  const watchFields = useWatch({
    control,
    name: FIELD_NAME,
    defaultValue: [{
      key: "",
      label: "",
      type: UIType.TextField,
    }]
  })

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-5 py-4 px-4 h-[48rem]">
          <div className="px-4 py-4 bg-gray-50 rounded-lg col-span-2 overflow-auto">
            {/* drag and drop */}
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="components">
                {(provided, _) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {fields.map((item, index) => {
                      return (
                        <DraggableUI
                          key={item.id} // better has a key for list component
                          defaultValues={item}
                          index={index}
                          name={`${FIELD_NAME}.${index}`} //  unique for one single form
                          handleDelete={onDelete(index)}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {/* add */}
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
          <div className="px-4 py-4 rounded-lg overflow-auto bg-zinc-100">
            <JSONPretty
              id="an-uniq-id"
              data={watchFields}
              style={{ fontSize: "12px" }}
              theme={{
                key: 'color:#5F9EA0;font-weight:bold;',
                string: 'color:#A52A2A;',
                boolean: 'color:#DA70D6',
              }}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;

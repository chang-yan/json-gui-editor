import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Draggable } from "react-beautiful-dnd";
import {
  BarsArrowDownIcon,
  TrashIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

import { UIType } from "../../utils/type";
import DetailBlock from "./DetailBlock";

interface IDraggableUI {
  defaultValue: ComponentValue;
  name: string;
  index: number;
  handleDelete: () => void;
}

type ComponentValue = {
  key: string;
  label: string;
  type: UIType;
};

const DraggableUI = (props: IDraggableUI) => {
  const { defaultValue, name, index, handleDelete } = props;
  const { register } = useFormContext();

  const [detailOpen, setDetailOpen] = useState<boolean>(false);

  return (
    <Draggable
      key={`${name}.${index}`}
      draggableId={`${name}.${index}`}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          className="w-[36rem] m-1"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex justify-between border-gray-300 border-b-2 py-2">
            {/* type */}
            <select
              className="font-mono font-bold place-self-center text-sm px-1 py-1 focus:ring-slate-500 focus:ring-1"
              {...register(`${name}.${index}.type`)}
              defaultValue={defaultValue.type}
            >
              <option>{UIType.TextField}</option>
              <option>{UIType.RadioGroup}</option>
              <option>{UIType.CheckGroup}</option>
              <option>{UIType.SmartInput}</option>
              <option>{UIType.AutoTextField}</option>
            </select>
            {/* key */}
            <div className="flex flex-col w-20 md:w-36">
              <label className="font-semibold text-sm py-1">key</label>
              <input
                className="ring-slate-200 ring-1 focus:ring-3 px-2 shadow text-gray-900 text-semibold text-sm"
                {...register(`${name}.${index}.key`)}
                defaultValue={defaultValue.key}
              />
            </div>
            {/* label */}
            <div className="flex flex-col w-20 md:w-36">
              <label className="font-semibold text-sm py-1">label</label>
              <input
                className="ring-slate-200 ring-1 focus:ring-3 px-2 shadow text-gray-900 text-semibold text-sm"
                {...register(`${name}.${index}.label`)}
                defaultValue={defaultValue.label}
              />
            </div>
            {/* toggle detail area */}
            <button
              type="button"
              className="flex w-8 h-8 hover:ring-rose-900 hover:ring-1 rounded-full place-self-center items-center justify-center"
              onClick={() => setDetailOpen(!detailOpen)}
            >
              <BarsArrowDownIcon className="w-5" />
            </button>
            {/* drag */}
            <button
              type="button"
              className="flex w-8 h-8 hover:ring-slate-600 hover:ring-1 rounded-full place-self-center items-center justify-center"
              {...provided.dragHandleProps}
            >
              <HandRaisedIcon className="w-5" />
            </button>
            {/* delete */}
            <button
              type="button"
              className="flex w-8 h-8 hover:ring-red-500 hover:ring-1 rounded-full place-self-center items-center justify-center"
              onClick={handleDelete}
            >
              <TrashIcon className="w-5" />
            </button>
          </div>
          {detailOpen && <DetailBlock />}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableUI;

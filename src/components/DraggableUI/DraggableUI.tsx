import React, { useState } from "react";
import {
  BarsArrowDownIcon,
  TrashIcon,
  HandRaisedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { ComponentType } from "../../utils/type";

interface TDraggableUI {
  componentType: ComponentType;
  initValue?: ComponentValue;
}

type ComponentValue = {
  key: string;
  label: string;
};

const DraggableUI = (props: TDraggableUI) => {
  const { componentType, initValue } = props;

  const initKey = initValue?.key || "";
  const initLabel = initValue?.label || "";

  const [key, setKey] = useState<string>(initKey);
  const [label, setLabel] = useState<string>(initLabel);
  const [detailToggled, setDetailToggled] = useState<boolean>(false);

  return (
    <div className="px-4 w-[36rem] m-1">
      <div className="flex justify-between border-gray-300 border-b-2 py-2">
        <select className="font-mono font-bold place-self-center text-sm px-1 py-1 focus:ring-slate-500 focus:ring-1">
          <option selected>{ComponentType.TextField}</option>
          <option>{ComponentType.RadioGroup}</option>
          <option>{ComponentType.CheckGroup}</option>
          <option>{ComponentType.SmartInput}</option>
          <option>{ComponentType.AutoTextField}</option>
        </select>
        <div className="flex flex-col w-20 md:w-36">
          <label className="font-semibold text-sm py-1">key</label>
          <input
            className="ring-slate-200 ring-1 focus:ring-3 px-2 shadow text-gray-900 text-semibold text-lg"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-20 md:w-36">
          <label className="font-semibold text-sm py-1">label</label>
          <input
            className="ring-slate-200 ring-1 focus:ring-3 px-2 shadow text-gray-900 text-semibold text-lg"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <button
          className="flex w-8 h-8 hover:ring-rose-900 hover:ring-1 rounded-full place-self-center items-center justify-center"
          onClick={() => setDetailToggled(!detailToggled)}
        >
          <BarsArrowDownIcon className="w-5" />
        </button>
        <button className="flex w-8 h-8 hover:ring-slate-600 hover:ring-1 rounded-full place-self-center items-center justify-center">
          <HandRaisedIcon className="w-5" />
        </button>
        <button className="flex w-8 h-8 hover:ring-red-500 hover:ring-1 rounded-full place-self-center items-center justify-center">
          <TrashIcon className="w-5" />
        </button>
      </div>
      {detailToggled && (
        <div className="w-full h-36 ring-gray-300 ring-8 p-3">
          <div className="flex flex-row justify-start">
            <button className="flex w-5 h-5 hover:ring-slate-600 hover:ring-1 rounded-full place-self-center items-center justify-center">
              <CheckCircleIcon className="w-5" />
            </button>
            <div className="font-mono font-medium p-1">required</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DraggableUI;

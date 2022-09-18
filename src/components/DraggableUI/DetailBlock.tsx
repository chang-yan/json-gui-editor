import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { UIProps } from "../../utils/type";

const DetailBlock = () => {
  return (
    <div className="w-full h-36 ring-gray-300 ring-8 p-3 overflow-auto">
      {Object.values(UIProps).map((val, i) => (
        <div className="flex flex-row justify-start" key={i}>
          <button className="flex w-5 h-5 hover:ring-slate-600 hover:ring-1 rounded-full place-self-center items-center justify-center">
            <CheckCircleIcon className="w-5" />
          </button>
          <div className="font-mono font-medium p-1">{val}</div>
        </div>
      ))}
    </div>
  );
};

export default DetailBlock;

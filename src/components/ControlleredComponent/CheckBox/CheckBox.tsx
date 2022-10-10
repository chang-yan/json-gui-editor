import React from "react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";

type CheckBoxProps = {
  onChange: (v: boolean) => void,
  value: boolean,
  name: string,
}

const CheckBox = (props: CheckBoxProps) => {
  const { onChange, value, name } = props;

  return <div className="flex flex-row justify-start">
    <button
      type="button"
      className={`flex w-5 h-5 hover:ring-slate-600 hover:ring-1 rounded-full place-self-center items-center justify-center`}
      onClick={() => onChange(!value)}
    >
      {value ? <CheckCircleIcon className="w-5" /> : <XCircleIcon className="w-5" />}
    </button>
    <div className="font-mono font-medium p-1">{name}</div>
  </div>
}

export default CheckBox;
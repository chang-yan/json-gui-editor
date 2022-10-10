import React, { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";

type CheckableTextFieldProps = {
  onChange: (val: string) => void,
  clearField: () => void,
  defaultValue: string,
  name: string,
}

const CheckableTextField = (props: CheckableTextFieldProps) => {
  const { onChange, clearField, defaultValue, name } = props;
  const [checked, setChecked] = useState<boolean>(Boolean(defaultValue));
  const [value, setValue] = useState<string>(defaultValue);

  return <div className="flex flex-row justify-start">
    <button
      type="button"
      className={`flex w-5 h-5 hover:ring-slate-600 hover:ring-1 rounded-full place-self-center items-center justify-center`}
      onClick={() => {
        setChecked(!checked)
        if (checked) {
          clearField();
        } else {
          onChange(value);
        }
      }}
    >
      {checked ? <CheckCircleIcon className="w-5" /> : <XCircleIcon className="w-5" />}
    </button>

    <div className="font-mono font-medium p-1">{name}</div>

    {checked &&
      <input
        className="ring-slate-200 ring-1 focus:ring-green-500 focus:ring-3 focus:border-green-500 px-2 shadow text-gray-900 text-semibold text-sm"
        value={value}
        onChange={e => {
          setValue(e.target.value); // inner state
          onChange(e.target.value); // react-hook-form form value
        }} />
    }
  </div>
}

export default CheckableTextField;
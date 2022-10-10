import { Controller, useFormContext, useWatch } from "react-hook-form";
import CheckBox from "../ControlleredComponent/CheckBox";
import { UIPropsValues } from "../../utils/type";

type DetailBlockProps = {
  name: string,
}
const DetailBlock = (props: DetailBlockProps) => {
  const { name } = props;
  const { control, resetField } = useFormContext();
  return (
    <div className="w-full h-36 ring-gray-300 ring-8 p-3 overflow-auto">
      {/* required */}
      <Controller
        control={control}
        name={`${name}.${UIPropsValues.required}`}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            onChange={(val: boolean) => {
              if (val) {
                onChange(val)
              } else {
                resetField(`${name}.${UIPropsValues.required}`)
              }
            }}
            value={value}
            name={UIPropsValues.required}
          />
        )}
      />
      {/* number */}
      <Controller
        control={control}
        name={`${name}.props.${UIPropsValues.number}`}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            onChange={(val: boolean) => {
              if (val) {
                onChange(val)
              } else {
                resetField(`${name}.${UIPropsValues.number}`)
              }
            }}
            value={value}
            name={UIPropsValues.number}
          />
        )}
      />
      {/* unit */}
      <Controller
        control={control}
        name={`${name}.props.${UIPropsValues.unit}`}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            onChange={(val: boolean) => {
              if (val) {
                onChange(val)
              } else {
                resetField(`${name}.${UIPropsValues.unit}`)
              }
            }}
            value={value}
            name={UIPropsValues.unit}
          />
        )}
      />
      {/* others */}
      <Controller
        control={control}
        name={`${name}.props.${UIPropsValues.others}`}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            onChange={(val: boolean) => {
              if (val) {
                onChange(val)
              } else {
                resetField(`${name}.${UIPropsValues.others}`)
              }
            }}
            value={value}
            name={UIPropsValues.others}
          />
        )}
      />
    </div>
  );
};

export default DetailBlock;

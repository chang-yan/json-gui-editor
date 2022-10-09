import { Controller, useFormContext } from "react-hook-form";
import CheckBox from "../ControlleredComponent/CheckBox";
import { UIProps } from "../../utils/type";

type DetailBlockProps = {
  name: string,
}
const DetailBlock = (props: DetailBlockProps) => {
  const { name } = props;
  const { control } = useFormContext();
  return (
    <div className="w-full h-36 ring-gray-300 ring-8 p-3 overflow-auto">
      {/* required */}
      <Controller
        control={control}
        name={`${name}.${UIProps.required}`}
        render={({ field: { onChange, value }}) => (
          <CheckBox
            onChange={(v: boolean) => {onChange(v)}}
            value={value}
            name={UIProps.required}
          />
        )}
      />
      {/* number */}
      <Controller
        control={control}
        name={`${name}.props.${UIProps.number}`}
        render={({ field: { onChange, value }}) => (
          <CheckBox
            onChange={(v: boolean) => {onChange(v)}}
            value={value}
            name={UIProps.number}
          />
        )}
      />
      {/* unit */}
      <Controller
        control={control}
        name={`${name}.props.${UIProps.unit}`}
        render={({ field: { onChange, value }}) => (
          <CheckBox
            onChange={(v: boolean) => {onChange(v)}}
            value={value}
            name={UIProps.unit}
          />
        )}
      />
      {/* others */}
      <Controller
        control={control}
        name={`${name}.props.${UIProps.others}`}
        render={({ field: { onChange, value }}) => (
          <CheckBox
            onChange={(v: boolean) => {onChange(v)}}
            value={value}
            name={UIProps.others}
          />
        )}
      />
    </div>
  );
};

export default DetailBlock;

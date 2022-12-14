import { Controller, useFormContext, useWatch } from "react-hook-form";
import { UIPropsValues } from "../../utils/type";
import CheckBox from "../ControlleredComponent/CheckBox";
import CheckableTextField from "../ControlleredComponent/CheckableTextField";

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
            onChange={onChange}
            clearField={() => resetField(`${name}.${UIPropsValues.required}`)}
            defaultValue={value}
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
            onChange={onChange}
            clearField={() => resetField(`${name}.props.${UIPropsValues.number}`)}
            defaultValue={value}
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
            onChange={onChange}
            clearField={() => resetField(`${name}.props.${UIPropsValues.unit}`)}
            defaultValue={value}
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
            onChange={onChange}
            clearField={() => resetField(`${name}.props.${UIPropsValues.others}`)}
            defaultValue={value}
            name={UIPropsValues.others}
          />
        )}
      />
      {/* defaultValue */}
      <Controller
        control={control}
        name={`${name}.${UIPropsValues.defaultValue}`}
        render={({ field: { onChange, value } }) => (
          <CheckableTextField
            onChange={onChange}
            clearField={() => resetField(`${name}.${UIPropsValues.defaultValue}`)}
            defaultValue={value}
            name={UIPropsValues.defaultValue}
          />
        )}
      />
    </div>
  );
};

export default DetailBlock;

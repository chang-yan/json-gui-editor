export enum UIType {
  TextField = "TextField",
  RadioGroup = "RadioGroup",
  CheckGroup = "CheckGroup",
  SmartInput = "SmartInput",
  AutoTextField = "AutoTextField",
};

export enum UIPropsValues {
  required = "required",
  defaultValue = "defaultValue",
  number = "number",
  unit = "unit",
  others = "others",
  options = "options",
};

export type UIValue = {
  key: string;
  label: string;
  type: UIType;
  props?: UIPropsValues;
};

export enum ContainerType {
  FieldArray = "FieldArray",
  Container = "Container",
  DependantCollapse = "DependantCollapse",
}

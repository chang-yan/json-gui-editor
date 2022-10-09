export enum UIType {
  TextField = "TextField",
  RadioGroup = "RadioGroup",
  CheckGroup = "CheckGroup",
  SmartInput = "SmartInput",
  AutoTextField = "AutoTextField",
};

export enum UIProps {
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
};

export enum ContainerType {
  FieldArray = "FieldArray",
  Container = "Container",
  DependantCollapse = "DependantCollapse",
}

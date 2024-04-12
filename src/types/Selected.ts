export type Option = {
  title: string;
  value: string;
};
export type OptionProps = {
  option: Option;
  onClick: (value: Option["value"]) => void;
};
export type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  status?: "default" | "invalid";
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
};

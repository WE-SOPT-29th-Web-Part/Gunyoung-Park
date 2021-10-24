import { ChangeEvent } from "react";

interface NumberInputProps {
  onValueChange?(value: string): void;
  value?: string;
}

export function NumberInput(props: NumberInputProps) {
  const { value = "", onValueChange = () => {} } = props;

  function valueChanged(e: ChangeEvent<HTMLInputElement>) {
    onValueChange(e.target.value);
  }

  return <input type="text" value={value} onChange={valueChanged}></input>;
}

import { ChangeEvent, useEffect, useState } from "react";

interface NumberInputProps {
  onValueChange?(value: number): void;
  value?: number;
}

export function NumberInput(props: NumberInputProps) {
  const { value = 1, onValueChange = () => {} } = props;

  const [raw, setRaw] = useState("");

  useEffect(() => {
    setRaw(value + "");
  }, [value]);

  function valueChanged(e: ChangeEvent<HTMLInputElement>) {
    setRaw(e.target.value);

    const num = parseInt(e.target.value);

    if (!isNaN(num)) {
      onValueChange(num);
    }
  }

  return <input type="text" value={raw} onChange={valueChanged}></input>;
}

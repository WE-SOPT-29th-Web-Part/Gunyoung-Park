import { ChangeEventHandler, useState } from "react";

export function useInput(init: string) {
  const [value, setValue] = useState(init);

  const onInputChange: ChangeEventHandler<{ value: string }> = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: onInputChange,
  };
}

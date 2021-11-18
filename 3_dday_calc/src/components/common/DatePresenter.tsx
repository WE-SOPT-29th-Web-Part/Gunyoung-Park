import { useEffect, useRef } from "react";
import gsap from "gsap";

interface DatePresenterProps {
  date: Date;
}

export function DatePresenter(props: DatePresenterProps) {
  const { date: dateValue } = props;

  const year = dateValue.getFullYear();
  const month = dateValue.getMonth() + 1;
  const date = dateValue.getDate();

  return (
    <div>
      <AnimatedNumber value={year} />년 <AnimatedNumber value={month} />월{" "}
      <AnimatedNumber value={date} />일{" "}
    </div>
  );
}

interface AnimatedNumberProps {
  value: number;
}

function AnimatedNumber(props: AnimatedNumberProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef({ value: 0 });
  const initRef = useRef(true);

  function setValue(value: number) {
    if (spanRef.current !== null) {
      spanRef.current.innerText = value + "";
    }
  }

  useEffect(() => {
    if (initRef.current) {
      setValue(props.value);
      return;
    }
    gsap.to(currentRef.current, {
      value: props.value,
      duration: 1.5,
      roundProps: "value",
      onUpdate() {
        setValue(currentRef.current.value);
      },
    });
  }, [props.value]);

  useEffect(() => {
    if (initRef.current) {
      initRef.current = false;
    }
  }, []);

  return <span ref={spanRef}>0</span>;
}

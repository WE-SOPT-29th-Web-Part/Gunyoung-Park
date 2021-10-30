interface DatePresenterProps {
  date: Date;
}

export function DatePresenter(props: DatePresenterProps) {
  const { date: dateValue } = props;

  const year = dateValue.getFullYear();
  const month = dateValue.getMonth() + 1;
  const date = dateValue.getDate();

  return <div>{`${year}년 ${month}월 ${date}일`}</div>;
}

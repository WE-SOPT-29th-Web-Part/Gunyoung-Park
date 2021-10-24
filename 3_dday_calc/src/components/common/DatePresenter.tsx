interface DatePresenterProps {
  date: Date;
}

export function DatePresenter(props: DatePresenterProps) {
  const { date: dateValue } = props;

  const year = dateValue.getFullYear();
  const month = dateValue.getMonth() + 1;
  const date = dateValue.getDate();

  return <div>{`${year} ${month} ${date}`}</div>;
}

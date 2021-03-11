export default function useDateToday() {

  const date = new Date();
  const today = date.toLocaleString
  ("default", { weekday: "long" });

  return today;
}
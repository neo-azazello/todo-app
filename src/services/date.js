export function longDateFormat(date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let newDate = new Date(date);

  return newDate.toLocaleDateString("en-US", options);
}

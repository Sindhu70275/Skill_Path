export const formatDuration = (minutes = 0) => {
  if (minutes <= 0) return "0 min";

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) {
    return `${mins} min${mins !== 1 ? "s" : ""}`;
  }

  if (mins === 0) {
    return `${hours}hr`;
  }

  return `${hours}hr ${mins} min${mins !== 1 ? "s" : ""}`;
};

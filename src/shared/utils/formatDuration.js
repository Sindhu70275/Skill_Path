export const formatDuration = (seconds = 0) => {
  if (seconds <= 0) return "0 min";

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  if (hours === 0) {
    return `${mins} min${mins !== 1 ? "s" : ""}`;
  }

  if (mins === 0) {
    return `${hours} hr${hours !== 1 ? "s" : ""}`;
  }

  return `${hours} hr${hours !== 1 ? "s" : ""} ${mins} min${mins !== 1 ? "s" : ""}`;
};

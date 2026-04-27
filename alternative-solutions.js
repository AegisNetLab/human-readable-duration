/**
 * Alternative Solution 1: Reduce-based version
 */
function formatDurationReduce(seconds) {
  if (seconds === 0) return "now";

  const units = [
    ["year", 31536000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1]
  ];

  const parts = units.reduce((acc, [unit, value]) => {
    const count = Math.floor(seconds / value);
    seconds %= value;

    if (count > 0) {
      acc.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
    }

    return acc;
  }, []);

  return parts.length === 1
    ? parts[0]
    : `${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}`;
}

/**
 * Alternative Solution 2: Helper-function version
 */
function formatDurationWithHelpers(seconds) {
  if (seconds === 0) return "now";

  const units = [
    { name: "year", value: 31536000 },
    { name: "day", value: 86400 },
    { name: "hour", value: 3600 },
    { name: "minute", value: 60 },
    { name: "second", value: 1 }
  ];

  const pluralize = (count, unit) => `${count} ${unit}${count > 1 ? "s" : ""}`;

  const joinParts = (parts) => {
    if (parts.length === 1) return parts[0];
    return `${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}`;
  };

  const parts = [];

  for (const unit of units) {
    const count = Math.floor(seconds / unit.value);

    if (count > 0) {
      seconds %= unit.value;
      parts.push(pluralize(count, unit.name));
    }
  }

  return joinParts(parts);
}

module.exports = {
  formatDurationReduce,
  formatDurationWithHelpers
};

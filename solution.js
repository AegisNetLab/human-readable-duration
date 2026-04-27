/**
 * Human Readable Duration Format
 * Codewars kata solution
 *
 * @param {number} seconds - Non-negative integer duration in seconds
 * @returns {string} Human-readable duration
 */
function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const units = [
    ["year", 365 * 24 * 60 * 60],
    ["day", 24 * 60 * 60],
    ["hour", 60 * 60],
    ["minute", 60],
    ["second", 1]
  ];

  const result = [];

  for (const [name, value] of units) {
    const count = Math.floor(seconds / value);

    if (count > 0) {
      seconds %= value;
      result.push(`${count} ${name}${count > 1 ? "s" : ""}`);
    }
  }

  if (result.length === 1) return result[0];

  return `${result.slice(0, -1).join(", ")} and ${result.at(-1)}`;
}

module.exports = formatDuration;

// Manual examples
if (require.main === module) {
  console.log(formatDuration(0));      // now
  console.log(formatDuration(62));     // 1 minute and 2 seconds
  console.log(formatDuration(3662));   // 1 hour, 1 minute and 2 seconds
}

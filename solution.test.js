const formatDuration = require("./solution");

describe("formatDuration", () => {
  test("returns now for zero seconds", () => {
    expect(formatDuration(0)).toBe("now");
  });

  test("formats seconds only", () => {
    expect(formatDuration(1)).toBe("1 second");
    expect(formatDuration(2)).toBe("2 seconds");
  });

  test("formats minutes and seconds", () => {
    expect(formatDuration(62)).toBe("1 minute and 2 seconds");
    expect(formatDuration(120)).toBe("2 minutes");
  });

  test("formats hours, minutes and seconds", () => {
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
  });

  test("formats days and years", () => {
    expect(formatDuration(86400)).toBe("1 day");
    expect(formatDuration(31536000)).toBe("1 year");
  });

  test("formats complex durations", () => {
    expect(formatDuration(132030240)).toBe("4 years, 68 days, 3 hours and 4 minutes");
    expect(formatDuration(205851834)).toBe("6 years, 192 days, 13 hours, 3 minutes and 54 seconds");
    expect(formatDuration(253374061)).toBe("8 years, 12 days, 13 hours, 41 minutes and 1 second");
  });
});

# Human Readable Duration Format

![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Jest](https://img.shields.io/badge/Tests-Jest-red)
![Codewars](https://img.shields.io/badge/Codewars-Kata-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

JavaScript solution for the Codewars kata **Human Readable Duration Format**.

## Description

The function receives a non-negative integer representing a duration in seconds and returns a human-readable string.

Examples:

```javascript
formatDuration(62);
// "1 minute and 2 seconds"

formatDuration(3662);
// "1 hour, 1 minute and 2 seconds"

formatDuration(0);
// "now"
```

## Rules

- If the input is `0`, return `"now"`.
- A year is `365` days.
- A day is `24` hours.
- Units must appear from the most significant to the least significant.
- Zero-value units must not appear in the output.
- Units must use singular or plural form correctly.
- Components are separated by `", "`, except the final component, which is separated by `" and "`.

## Solution

```javascript
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
```

## Project Structure

```text
human-readable-duration/
├── README.md
├── solution.js
├── alternative-solutions.js
├── solution.test.js
├── package.json
├── .gitignore
└── LICENSE
```

## Installation

```bash
git clone https://github.com/YOUR_USERNAME/human-readable-duration.git
cd human-readable-duration
npm install
```

## Run Examples

```bash
npm start
```

## Run Tests

```bash
npm test
```

## Codewars Kata

Kata: Human Readable Duration Format  
https://www.codewars.com/kata/human-readable-duration-format

## Author

Your Name

## License

This project is licensed under the MIT License.


const input = `
................
...F.F..........
....X...........
...F.F..........`;

const patterns = {
  Cross: `
F.F
.X.
F.F`,
  Bend: `
F..
F..
XXX`,
  Arrow: `
S.W
SW.
SSS`
};

function match(input, patterns) {
  return {
    pattern: 'Cross',
    left: 4,
    top: 2
  }
}

const result = match(input, patterns);

if (result != null) {
  console.log(`Input is matching against ${result.pattern} at ${result.left}:${result.top}.`);
} else {
  console.log("No pattern matched");
}

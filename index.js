
const input = `
................
...F.F..........
....X...........
...F.F..........`.trim().split("\n");

const patterns = {
  Cross: `
F.F
.X.
F.F`.trim().split("\n"),
  Bend: `
F..
F..
XXX`.trim().split("\n"),
  Arrow: `
S.W
SW.
SSS`.trim().split("\n")
};

function match(input, patterns) {
  const iWidth = input[0].length;
  const iHeight = input.length;

  for (const [pattern, pstr] of Object.entries(patterns)) {
    const pWidth = pstr[0].length;
    const pHeight = pstr.length;

    for (let x = 0; x <= iWidth - pWidth; x++) {
      for (let y = 0; y <= iHeight - pHeight; y++) {
        const subInput = input.slice(y, y + pHeight).map(line => line.substr(x, pWidth));

        if (subInput.join() === pstr.join()) {
          return {
            pattern,
            left: x + 1,
            top: y + 1
          }
        }
      }
    }
  }
}

const result = match(input, patterns);

if (result != null) {
  console.log(`Input is matching against ${result.pattern} at ${result.left}:${result.top}.`);
} else {
  console.log("No pattern matched");
}

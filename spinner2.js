const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\n'];
let interval = 0;

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, interval);
  interval += 200;
}
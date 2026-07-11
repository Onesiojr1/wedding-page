import sharp from "sharp";

const input = "public/hero2.png";
const output = "public/hero2-cropped.png";

const meta = await sharp(input).metadata();
console.log("Original:", meta.width, "x", meta.height);

const result = await sharp(input)
  .trim({ threshold: 25 })
  .toFile(output);

console.log("Cortada:", result.width, "x", result.height);

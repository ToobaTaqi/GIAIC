import inquirer from "inquirer";
import chalk from "chalk";

const p = await inquirer.prompt({
  name: "inp",
  type: "input",
  message: chalk.blue("type your paragraph here"),
});
const paragraph = p.inp;

const trimmedParagraph = paragraph.trim();
// Breakdown of /\s+/
// /: This denotes the start and end of the regular expression.
// \s: This is a shorthand character class that matches any whitespace character. Whitespace characters include spaces, tabs, newlines, and other Unicode space characters.
// +: This is a quantifier that matches one or more of the preceding element (in this case, \s).
const words = trimmedParagraph.split(/\s+/);
// console.log(words)
const wordCount = words.length;
const charCount = trimmedParagraph.replace(/\s/g, "").length;

console.log(`Word count: ${chalk.greenBright(wordCount)}`);
console.log(`Character count (excluding spaces): ${chalk.green(charCount)}`);

// try this paragraphr
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis erat, euismod nec enim non, fermentum dictum tortor. Nullam fringilla laoreet mattis. Quisque risus enim, semper egestas volutpat a, tristique pretium sapien. Ut ut tempus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat posuere lacus, ut imperdiet velit ullamcorper quis. Sed venenatis leo vitae leo ornare convallis. Etiam porttitor et tortor quis lobortis. Ut ac consectetur turpis. Phasellus vestibulum, metus eget sollicitudin dapibus, lorem diam convallis mauris, sit amet sollicitudin ipsum ante facilisis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse finibus placerat vehicula. Morbi nec arcu id nibh pretium sollicitudin a eget urna. Duis ac metus vitae nisi pretium vulputate non sit amet ex.

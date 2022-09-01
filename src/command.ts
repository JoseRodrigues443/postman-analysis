import { Command } from "commander";
const program = new Command();

program
  .name('node-typescript-terminal')
  .description('Typescript template cli application')
  .version('0.8.0');

program.option("-n, --name <name>", "Override Name");

program.parse(process.argv);

const options =  program.opts();

export { options };
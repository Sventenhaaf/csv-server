import { app, get, post } from "https://denopkg.com/syumai/dinatra/mod.ts";
import getTable from "./getTable.ts";

//////// TEST HTTP CALLS ///////////////
const greeting = "Hello there!";

interface ReadProps {
  params: { id?: string };
}

interface WriteProps {
  params: { tableName?: string };
}

const greet = ({ params }: ReadProps): string =>
  greeting + `\nand hello to ${params.id}`;

const write = async ({ params }: WriteProps): Promise<string> => {
  if (params.tableName === undefined) return "NO TABLE FOUND";
  const string = await getTable(params.tableName);
  console.log("STRING:", string);
  return `POSTED --> ${params.tableName}`;
};

const readCsv = (): string => {
  console.log("CONSOLE STUFF HERE");

  return "SEE CONSOLE FOR OUTPUT";
};

app(
  get("/hello", (): string => greeting),
  get("/hello/:id", greet),
  get("/", readCsv),
  post("/:tableName", write),
  //   ,
  // ),
);

//////// TEST CSV READER ///////////////

const decoder = new TextDecoder("utf-8");
const dataString = decoder.decode(await Deno.readFile("users.csv"));

// const aa = await parse(dataString, {
//   header: false,
//   comma: ";",
// });

// aa.forEach((row) => console.log("ROW: -> ", row));
// console.log(aa);

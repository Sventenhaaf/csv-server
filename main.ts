import { app, get } from "https://denopkg.com/syumai/dinatra/mod.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

//////// TEST HTTP CALLS ///////////////
const greeting = "Hello there!";

interface Props {
  params: { id?: string };
}

const greet = ({ params }: Props): string =>
  greeting + `\nand hello to ${params.id}`;

const readCsv = (): string => {
  console.log("CONSOLE STUFF HERE");

  return "SEE CONSOLE FOR OUTPUT";
};

app(
  get("/hello", (): string => greeting),
  get("/hello/:id", greet),
  get("/", readCsv),
);

//////// TEST CSV READER ///////////////

const decoder = new TextDecoder("utf-8");

const data = await Deno.readFile("hello.txt");
console.log(decoder.decode(data));

// const string = "a,b,c\nd,e,f";
const aa = await parse("users.csv", {
  header: false,
});
console.log(aa);

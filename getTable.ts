import { parse } from "https://deno.land/std/encoding/csv.ts";

const decoder = new TextDecoder("utf-8");

const getTable = async (tableName: string): Promise<unknown[] | null> => {
  try {
    const dataString = decoder.decode(await Deno.readFile(`${tableName}.csv`));
    const arrayOfArrays = await parse(dataString, {
      header: false,
      comma: ";",
    });
    return arrayOfArrays;
  } catch (e) {
    return null;
  }
};

export default getTable;

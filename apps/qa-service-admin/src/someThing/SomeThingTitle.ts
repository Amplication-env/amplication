import { SomeThing as TSomeThing } from "../api/someThing/SomeThing";

export const SOMETHING_TITLE_FIELD = "id";

export const SomeThingTitle = (record: TSomeThing): string => {
  return record.id || String(record.id);
};

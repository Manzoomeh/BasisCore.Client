﻿import IToken from "../../interface/IToken";
import ArrayToken from "../base/ArrayToken";

export default class StringArray extends ArrayToken<string> {
  TryParse(value: string): string {
    return value;
  }
  constructor(...collection: Array<IToken<string>>) {
    super(...collection);
  }
}

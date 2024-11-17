// Copyright (c) 2024 Adam Burucs. MIT license.

import { Err, Ok, Result } from "./lib/result.js";

async function dummyAsync(
  isSuccessful: boolean = true
): Promise<Result<string, string>> {
  if (isSuccessful) {
    return Ok("Dummy is OK!");
  }
  return Err("Dummy has Error!");
}

// Dummy is OK!
await dummyAsync().then((result: Result<string, string>) => {
  if (result.ok) {
    console.log(result.value);
  } else {
    console.error(result.error);
  }
});

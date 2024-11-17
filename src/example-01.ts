// Copyright (c) 2024 Adam Burucs. MIT license.

import { Err, Ok, Result } from "./lib/result.js";

function calculate_dog_age(age: number): Result<number, string> {
  if (age < 1) {
    return Err("Error: age should be at least 1.");
  }
  return Ok(Math.round(16 * Math.log(age) + 31));
}

// { ok: false, error: 'Error: age should be at least 1.' }
console.log(calculate_dog_age(0));

// { ok: true, value: 31 }
console.log(calculate_dog_age(1));

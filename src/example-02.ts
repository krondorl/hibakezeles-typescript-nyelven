// Copyright (c) 2024 Adam Burucs. MIT license.

import { Either, makeLeft, makeRight } from "./lib/either.js";

function calculate_dog_age(age: number): Either<string, number> {
  if (age < 1) {
    return makeLeft("Error: age should be at least 1.");
  }
  return makeRight(Math.round(16 * Math.log(age) + 31));
}

// { left: 'Error: age should be at least 1.' }
console.log(calculate_dog_age(0));

// { right: 31 }
console.log(calculate_dog_age(1));

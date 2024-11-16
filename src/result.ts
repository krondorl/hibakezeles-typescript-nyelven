// Huy's implementation
// https://www.huy.rocks/everyday/02-14-2022-typescript-implement-rust-style-result

type Result<T, E = undefined> =
  | { ok: true; value: T }
  | { ok: false; error: E | undefined };

const Ok = <T>(data: T): Result<T, never> => {
  return { ok: true, value: data };
};

const Err = <E>(error?: E): Result<never, E> => {
  return { ok: false, error };
};

// *****************************************************************************
// Copyright (c) 2024 Adam Burucs. MIT license.

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

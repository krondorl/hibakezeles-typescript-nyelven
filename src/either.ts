// Anthony Manning-Franklin's implementation
// https://antman-does-software.com/stop-catching-errors-in-typescript-use-the-either-type-to-make-your-code-predictable

type Left<T> = {
  left: T;
  right?: never;
};

type Right<U> = {
  left?: never;
  right: U;
};

type Either<T, U> = NonNullable<Left<T> | Right<U>>;

type UnwrapEither = <T, U>(e: Either<T, U>) => NonNullable<T | U>;

const unwrapEither: UnwrapEither = <T, U>({ left, right }: Either<T, U>) => {
  if (right !== undefined && left !== undefined) {
    throw new Error(
      `Received both left and right values at runtime when opening an Either\nLeft: ${JSON.stringify(
        left
      )}\nRight: ${JSON.stringify(right)}`
    );
    /*
     We're throwing in this function because this can only occur
     at runtime if something happens that the TypeScript compiler
     couldn't anticipate. That means the application is in
     an unexpected state and we should terminate immediately.
    */
  }
  if (left !== undefined) {
    // Typescript is getting confused and returning this type
    // as `T | undefined` unless we add the type assertion
    return left as NonNullable<T>;
  }
  if (right !== undefined) {
    return right as NonNullable<U>;
  }
  throw new Error(
    `Received no left or right values at runtime when opening Either`
  );
};

const isLeft = <T, U>(e: Either<T, U>): e is Left<T> => {
  return e.left !== undefined;
};

const isRight = <T, U>(e: Either<T, U>): e is Right<U> => {
  return e.right !== undefined;
};

const makeLeft = <T>(value: T): Left<T> => ({ left: value });

const makeRight = <U>(value: U): Right<U> => ({ right: value });

// *****************************************************************************
// Copyright (c) 2024 Adam Burucs. MIT license.

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

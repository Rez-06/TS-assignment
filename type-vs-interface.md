# Type Aliases vs Interfaces in TypeScript
## Introduction
`type` and `interface` both are used to describe custom types but `interface` is used for object contracts, class structures, and object shapes that may need extension or declaration merging whereas `type` is used for unions, tuples, primitives, intersections, and more complex type expressions

## `type` keyword
It gives name to any type which can represent objects, primitives, unions , intersections, tuples etc. Good for combining types.

``` ts
type ID = string | number;

type User = {
  name: string;
  age: number;
};

type Admin = User & {
  role: string;
};
```

## `interface` keyword

Mainly used to define object structure. Can extend other interfaces using `extends`

``` ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

## Conclusion
Neither `type` nor `interface` is universally better. We have to sselect the one
that best fits the structure we need and keep our team's conventions
consistent.

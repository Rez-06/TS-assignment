# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control where class properties and methods can be
accessed. TypeScript provides `public`, `private`, and `protected`
access modifiers.

## public

**Public** members can be accessed from anywhere. They are public by default when no modifier is specified.

``` ts
class User {
  public name = "Rezwan";
}

const user = new User();
console.log(user.name); 
```

## private
**Private** members can only be accessed inside the class where they are declared. They help hide internal data and prevent direct modification from outside.

``` ts
class BankAccount {
  private balance = 1000;

  getBalance() {
    return this.balance;
  }
}
```

## protected
**Protected** members can be accessed inside their declaring class and its subclasses, but not directly through an external object.

``` ts
class Person {
  protected name = "Rez";
}

class Student extends Person {
  introduce() {
    return this.name;
  }
}
```
## Conclusion
**public** is used when the class dont need any protection
**private** is used for class only implementation details
**protected** is used when protection of data is needed but child classes need to access the data
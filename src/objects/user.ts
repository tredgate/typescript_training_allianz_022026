// src/objects/user.ts
export class User {
  username: string;
  password: string;
  age: number;
  isActive = true;
  private role: string = "User";
  readonly passwordValidity = 3;

  constructor(username: string, password: string, age: number) {
    this.username = username;
    this.password = password;
    this.age = age;
    console.log(
      `Vytvořen uživatel: ${this.username} ve věku: ${this.age}, aktivován: ${this.isActive}`,
    );
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}, role: ${this.role}`,
    );
  }

  setAge(newAge: number): void {
    console.log(
      `Změna věku uživatele ${this.username} z ${this.age} na ${newAge}`,
    );
    this.age = newAge;
  }
}

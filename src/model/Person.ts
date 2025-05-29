export default class Person {
  constructor(readonly name: string, readonly email: string) {}

  get maskdEmail(): string {
    const regex = /(.{1,3})(.*)(@.*)/;
    return this.email.replace(regex, (_, p1, p2, p3) => {
      return `${p1}${"*".repeat(p2.length)}${p3}`;
    });
  }
  toString(): string {
    return `${this.name} <<${this.maskdEmail}>>`;
  }
}

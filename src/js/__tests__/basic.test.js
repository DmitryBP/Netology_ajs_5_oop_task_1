import Bowman from "../Bowman";
import Character from "../Character";

test("Объект должен содержать name, type, health, level", () => {
  const character = new Character("Dima", "Bowman");
  expect(character).toEqual({
    name: "Dima",
    type: "Bowman",
    health: 100,
    level: 1,
  });
  expect(typeof character.health).toBe("number");
  expect(typeof character.level).toBe("number");
});

describe("Проверка длины имени и соответствия типа объекта", () => {
  test("Имя должно быть длиннее 1 символа", () => {
    expect(() => new Character("D", "Bowman")).toThrow("Имя должно быть от 2 до 10 символов");
  });

  test("Имя должно быть короче 10 символов", () => {
    expect(() => new Character("Dimadimadim", "Bowman")).toThrow("Имя должно быть от 2 до 10 символов");
  });

  test("Объект не подходящего типа выбрасывает ошибку", () => {
    expect(() => new Character("Dima", "test")).toThrow("Недопустимый тип персонажа");
  });
});

describe("Проверка на наследование", () => {
  test("Bowman является экземпляром класса Character", () => {
    const bowman = new Bowman("Dima");
    expect(bowman).toBeInstanceOf(Character);
  });
});
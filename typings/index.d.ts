export = TotallyRandom;

declare class TotallyRandom {
    constructor(randomizer?: () => number);

    randomizer: () => number;

    array<T>(arr: T[], count?: number, unique?: boolean): (T | T[]);

    between(num1: number, num2: number, count?: number): (number | number[]);

    boolean(count?: number): (boolean | boolean[]);

    chance(arr: any[], count?: number): any;

    color(option?: ("hex" | "rgb" | "rgba" | "hsl" | "hsla"), count?: number): (string | string[]);

    floatTo(num: number, count?: number): (number | number[]);

    percent(count?: number): (number | number[]);

    shuffle<T>(arr: T[]): T[];

    string(option?: ("alphanumeric" | "alpha" | "numeric"), length?: number): string;

    to(num: number, count?: number): (number | number[]);

    colour(option?: ("hex" | "rgb" | "rgba" | "hsl" | "hsla"), count?: number): (string | string[]);
}
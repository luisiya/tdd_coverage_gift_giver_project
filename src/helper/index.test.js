import { max_number } from "./index";

describe("Max number", () => {
    describe("given an empty array", () => {
        it("return 0", () => {
            expect(max_number([])).toEqual(0);
        });
    });

    describe("given an array of numbers", () => {
        it("returns the max_number", () => {
            expect(max_number([1,2,3])).toEqual(3)
        });
    });
});
import { assert } from "chai";
import { fib, fib_slow } from "../app/fib";

describe("returns fib number", () => {
	const cases = [
		[-10, -55],
		[0, 0],
		[1, 1],
		[2, 1],
		[10, 55]
	]

	for (const [tested, expected] of cases) {
		it(`returns correct value: ${tested}`, () => {
			assert.equal(fib(tested), expected)
		})
	}
})

describe("returns correct fib number", () => {
	const cases = [1, 2, 3, 30]

	for (const num of cases) {
		it(`returns the same value as slow version: ${num}`, () => {
			const tested1 = fib(num)
			const tested2 = fib_slow(num)
			assert.equal(tested1, tested2)
		})
	}
})
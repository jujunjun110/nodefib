import { assert } from "chai";
import { fib, fib_slow } from "../app/fib";

it("return fib number", () => {
	const cases = [
		[-10, -55],
		[0, 0],
		[1, 1],
		[2, 1],
		[10, 55]
	]

	for (const [val, expected] of cases) {
		assert.equal(fib(val), expected)
	}
})

it("return fib number", () => {
	const cases = [1, 2, 3, 30]

	for (const num of cases) {
		const val1 = fib(num)
		const val2 = fib_slow(num)
		assert.equal(val1, val2)
	}
})
import { assert } from "chai";
import { fib } from "../app/fib";

it("return fib number", () => {
	const cases = [
		[1, 1],
		[2, 1],
		[10, 55]
	]

	for (const [val, expected] of cases) {
		assert.equal(fib(val), expected)
	}
})

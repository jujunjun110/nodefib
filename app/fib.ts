export const fib = function (num: number): number {
	return fib_inner(num, 1, 0)
}

export const fib_slow = function (num: number): number {
	if (num == 1 || num == 2) {
		return 1
	}
	return fib_slow(num - 1) + fib_slow(num - 2)
}


const fib_inner = function (num: number, a: number, b: number): number {
	if (num < 0) {
		return -fib_inner(-num, 1, 0)
	}

	if (num == 0) {
		return 0
	}

	if (num == 1) {
		return a
	}

	return fib_inner(num - 1, a + b, a)
}
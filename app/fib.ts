export const fib = function (num: number): number {
	if (num == 1 || num == 2) {
		return 1
	}

	return fib(num - 1) + fib(num - 2)
}

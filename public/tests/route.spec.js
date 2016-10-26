(function () {
	'use strict';

	describe('Route.fn.match', function () {
		beforeEach(function () {
			this.route = new Route('/path/:key', View);
		});

		it('возвращает true, если переданный путь удовлетворяет шаблону, заданому при создании роута', function () {
			expect(this.route.match('/path/123')).toBe(true);
			expect(this.route.match('/path/foo')).toBe(true);
			expect(this.route.match('/path/foobar/')).toBe(true);
		});


		it('возвращает false, если переданный путь не удовлетворяет шаблону, заданому при создании роута', function () {
			expect(this.route.match('/path')).toBe(false);
			expect(this.route.match('/path2/123')).toBe(false);
			expect(this.route.match('/path/123/another')).toBe(false);
			expect(this.route.match('/pathpathpath/123')).toBe(false);

		});
	})
})();

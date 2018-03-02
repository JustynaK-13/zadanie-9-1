function getTriangleArea(a, h) {

	if ((a > 0 ) && (h > 0)) {
		return a*h/2;
	} if ((a <= 0 ) || (h <= 0)) {
		console.log('Nieprawidłowe dane');
	}
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
    triangle2Area = getTriangleArea(5, 4);
    triangle3Area = getTriangleArea(8, 12);

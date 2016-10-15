const reverse = function (arr) {
	let elements = [];
	for (let i = arr.length ; i>=0; i--) {
		elements.push(arr[i]);
	};
	return elements;
};

const reversedArray = reverse([1,2,3,4,5,6,7]);
console.log(reversedArray);
function firstWord(s) {
  // your code here
	let s1 = s.trim();
	let s2 = s1.split(" ");
	return s2[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

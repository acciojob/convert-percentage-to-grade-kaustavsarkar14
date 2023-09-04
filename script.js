function calculateGrade(p) {
  //your code here
	if(p>=90) return 'A';
	else if(p>=80 && p<90) return 'B';
	else if(p>=70 && p<80) return 'C';
	else if(p>=60 && p<70) return 'D';
	else if(p<60) return 'F';
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));

function calculateArea(length, width) {
    if (length > 0 && width > 0) {
      return length * width;
    } else {
      return "Invalid dimensions!";
    }
  }
  
  console.log(calculateArea(5, 7));
  console.log(calculateArea(0, 10));
  console.log(calculateArea(-3, 4));
  console.log(calculateArea("2", 6));
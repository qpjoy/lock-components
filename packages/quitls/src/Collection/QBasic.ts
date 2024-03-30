class QBasic {
  /**
   * Returns the sum of two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * other params
   * @returns {number} - The sum of the two numbers.
   */
  static sum(...args: number[]): number {
    return args.reduce((acc, cur) => acc + cur, 0);
  }
  /**
   * Returns the sum of two numbers.
   * @param {number|stirng} a - The first number.
   * @param {number|string} b - The second number.
   * other
   * @returns {number} - The sum of the two numbers.
   */
  static sumstring(...args: (number | string)[]): number | string {
    let total: number | string = 0;
    for (let i = 0; i < args.length; i++) {
      const value: string | number = args[i];
      if (typeof total === "number" && typeof value === "number") {
        total += value;
      } else {
        total = `${total}${value}`;
      }
    }
    return total;
  }

  /**
   * Returns the result of a calculation.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @param {string} operator - The operator to use in the calculation.
   * @returns {number} - The result of the calculation.
   */
  static calculator(num1: number, num2: number, operator: string) {
    // Declare a variable to store the result
    let result;

    // Use a switch statement to determine which operation to perform
    switch (operator) {
      case "+":
        result = num1 + num2;
        break; // Break out of the switch statement
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        // If the operator is not one of the above, throw an error
        throw new Error("Invalid operator");
    }

    return result;
  }

  /**
   * Returns the number of occurrences of a character in a string.
   * @param {string} str - The string to search.
   * @param {string} char - The character to search for.
   * @returns {number} - The number of occurrences of the character in the string.
   */
  static countOccurrences = (str: string, char: string) =>
    str.split(char).length - 1;

  /**
   * Returns a string with the first letter of each word capitalized.
   * @param {string} str - The string to capitalize.
   * @returns {string} - The string with the first letter of each word capitalized.
   */
  static titleCase(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  /**
   * Returns a string with the first letter of each word capitalized.
   * @param {string} str - The string to capitalize.
   * @returns {string} - The string with the "_s" letter of each word capitalized.
   */
  static camelCase(str: string) {
    return str.replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase());
  }

  /**
   * Returns a reversed string.
   * @param {string} str - The string to reverse.
   * @returns {string} - The reversed string string.
   */
  static reverse(str: string) {
    return str.split("").reverse().join("");
  }

  /**
   * Returns true if the string is a palindrome.
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string is a palindrome, false otherwise.
   */
  static isPalindrome(str: string) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Reverse the string
    const reversedStr = formattedStr.split("").reverse().join("");
    // Return whether the formatted string is equal to the reversed string
    return formattedStr === reversedStr;
  }

  /**
   * Returns the number of vowels in a string.
   * @param {string} str - The string to search.
   * @returns {number} - The number of vowels in the string.
   */
  static countVowels(str: string): number {
    // Declare a variable to store the formatted string
    const formattedStr = str.toLowerCase();
    // Declare a variable to store the number of vowels
    let count = 0;

    // Loop through the string
    for (let i = 0; i < formattedStr.length; i++) {
      // Declare a variable to store the current character
      const char = formattedStr[i];

      // If the current character is a vowel, increment the count
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }

    // Return the number of vowels
    return count;
  }
}

export default QBasic;

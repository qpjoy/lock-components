function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

class QPresent {
  /**
   * Returns an array of numbers from 1 to the number passed in.
   * @param {number} num - The number to loop up to.
   * @returns {any[]} - The array of numbers.
   */
  static fizzBuzzArray(num: number) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  }

  /**
   * Returns the intersection of two arrays.
   * @param {number[]} arr1 - The first array.
   * @param {number[]} arr2 - The second array.
   * @returns {number[]} - The intersection of the two arrays.
   */
  intersection(arr1: [], arr2: []) {
    // Create a set from arr1
    const set1 = new Set(arr1);
    // Declare an empty array to store the intersection
    const intersection: [] = [];

    // Loop through arr2
    for (const num of arr2) {
      // If the current number is in set1, add it to the intersection array
      if (set1.has(num)) {
        intersection.push(num);
      }
    }

    return intersection;
  }

  /**
   * Returns a string of who likes the post.
   * @param {string[]} names - The names of the people who like the post.
   * @returns {string} - A string of who likes the post.
   */
  static displayLikes(names: string[]) {
    // Get the length of the array
    const length = names.length;

    // Return the appropriate string based on the length of the array
    if (length === 0) {
      return "no one likes this";
    } else if (length === 1) {
      return `${names[0]} likes this`;
    } else if (length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
  }

  /**
   * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
   * @param {number[]} arr - The array of numbers.
   * @returns {number} - The missing number.
   */
  static findMissingNumber(arr: number[]) {
    // If the array is empty or undefined, return undefined
    if (!arr || arr.length === 0) {
      return undefined;
    }
    // Add 1 to the length of the array to account for the missing number
    const n = arr.length + 1;
    // Calculate the expected sum of the numbers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;
    // Calculate the actual sum of the numbers in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    // Return the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
  }

  /**
   * Returns the missing letter in an array of consecutive letters.
   * @param {string[]} arr - An array of consecutive letters.
   * @returns {string} - The missing letter.
   */
  static findMissingLetter(arr: string[]) {
    let start = arr[0].charCodeAt(0);
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i].charCodeAt(0);
      if (current - start > 1) {
        return String.fromCharCode(start + 1);
      }
      start = current;
    }
    return "";
  }

  /**
   * Returns true if all characters in a string are unique.
   * @param {string} str - The string to check.
   * @returns {boolean} - Whether all characters in the string are unique.
   */
  static areAllCharactersUnique(str: string) {
    // Create a new set
    const charSet = new Set();

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      const char = str[i];
      // If the set already has the current character, return false
      if (charSet.has(char)) {
        return false;
      }
      // Add the current character to the set
      charSet.add(char);
    }

    // If no characters are repeated, return true
    return true;
  }

  /**
   * Returns the first non-repeating character in a string.
   * @param {string} str - The string to search.
   * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
   */
  static findFirstNonRepeatingCharacter(str: string) {
    // Create a new map
    const charCount = new Map();

    // Loop through the string
    for (const char of str) {
      // If the map already has the current character, increment the count
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Loop through the string
    for (const char of str) {
      // If the count of the current character is 1, return the current character
      if (charCount.get(char) === 1) {
        return char;
      }
    }

    // If no characters are repeated, return null
    return null;
  }

  /**
   * Simulates the dice game.
   * @param {number} numSimulations - The number of times to simulate the dice game.
   * @returns {Array} - An array of simulation result objects.
   */
  static diceGameSimulation(
    numSimulations: number
  ): { dice1: number; dice2: number; sum: number; result: string }[] {
    const results = [];

    for (let i = 0; i < numSimulations; i++) {
      const dice1 = rollDice();
      const dice2 = rollDice();
      const sum = dice1 + dice2;

      let result = "";
      if (sum === 7 || sum === 11) {
        result = "win";
      } else if (sum === 2 || sum === 3 || sum === 12) {
        result = "lose";
      } else {
        result = "roll again";
      }
      results.push({
        dice1,
        dice2,
        sum,
        result,
      });
    }
    return results;
  }

  /**
   * Returns a string representing a phone number.
   * @param {number[]} numbers - The numbers to use in the phone number.
   * @returns {string} - The formatted phone number.
   */
  static formatPhoneNumber(numbers: number[]): string {
    return `(${numbers.slice(0, 3).join("")}) ${numbers
      .slice(3, 6)
      .join("")}-${numbers.slice(6).join("")}`;
  }

  /**
   * Returns whether the string is a valid email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean} - Whether the email address is valid.
   */
  static validateEmail(email: string) {
    // Create a regular expression to match the email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // Return whether the email matches the regular expression
    return emailRegex.test(email);
  }

  /**
   * Returns the sum of the squares of the even numbers in the array.
   * @param {number[]} numbers - The array of numbers.
   * @returns {number} - The sum of the squares of even numbers.
   */
  static sumOfEvenSquares(numbers: number[]) {
    const evenSquares = numbers
      .filter((num) => num % 2 === 0)
      .map((num) => num ** 2)
      .reduce((sum, square) => sum + square, 0);
    return evenSquares;
  }

  /**
   * Calculates and returns the total sales amount including tax from the input array of products and tax rate.
   * @param {Object[]} products - The array of product objects.
   * @param {string} products[].name - The name of the product.
   * @param {number} products[].price - The price of the product.
   * @param {number} products[].quantity - The quantity sold of the product.
   * @param {number} taxRate - The tax rate as a percentage.
   * @returns {number} - The total sales amount including tax.
   */
  static calculateTotalSalesWithTax(
    products: [{ price: number; quantity: number }],
    taxRate: number
  ) {
    const totalSales = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    const taxAmount = (totalSales * taxRate) / 100;
    const totalSalesWithTax = totalSales + taxAmount;
    return parseFloat(totalSalesWithTax.toFixed(2));
  }

  /**
   * Returns the highest scoring word from a string.
   * @param {string} str - The input string.
   * @returns {string} - The highest scoring word.
   */
  static highestScoringWord(str: string) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Map the array of words to an array of scores
    const scores = words.map((word) =>
      // Reduce the word to a single score
      Array.from(word).reduce(
        (score, letter) => score + letter.charCodeAt(0) - 96,
        0
      )
    );

    // Find the highest score and index
    const highestScore = Math.max(...scores);
    const highestIndex = scores.indexOf(highestScore);

    // Return the word with the highest score
    return words[highestIndex];
  }

  /**
   * Checks if two strings are valid anagrams of each other.
   *
   * @param {string} str1 - The first input string.
   * @param {string} str2 - The second input string.
   * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
   */
  static validAnagrams(str1: string, str2: string): boolean {
    // Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the first string
    const freqCount1: Record<string, number> = str1
      .split("")
      .reduce((acc: Record<string, number>, char) => {
        // Increment the frequency of the character or initialize it to 1 if not present
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});

    // Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the second string
    const freqCount2 = str2
      .split("")
      .reduce((acc: Record<string, number>, char) => {
        // Increment the frequency of the character or initialize it to 1 if not present
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});

    // Compare the two objects of character frequencies by checking if the frequency of each character in the first object is equal to the frequency of the same character in the second object
    return (
      Object.keys(freqCount1).every(
        (char) => freqCount1[char] === freqCount2[char]
      ) &&
      Object.keys(freqCount2).every(
        (char) => freqCount1[char] === freqCount2[char]
      )
    );
  }

  /**
   * Generates a hashtag from the input string.
   * @param {string} str - The input string.
   * @returns {string|boolean} - The generated hashtag string or false.
   */
  // "#HelloWorld"
  static generateHashtag(str: string): string | boolean {
    // Split the string into an array of words. Use reduce to build the hashtag by passing in `#` as the initial value and then concatenating the first letter of each word capitalized and the rest of the word.
    const hashtag = str.split(" ").reduce(function (tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, "#");

    // If the hashtag is only one character long or longer than 140 characters, return false, otherwise return the hashtag.
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
  }

  /**
   * Checks if a given string is a valid IPv4 address.
   * @param {string} input - The input string to check.
   * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
   */
  static isValidIPv4(input: string) {
    // Split the input string into an array of octets.
    const octets = input.split(".");
    // If the input string does not contain exactly 4 octets, return false.
    if (octets.length !== 4) {
      return false;
    }
    // Otherwise, return true if every octet is a number between 0 and 255.
    return octets.every((octet) => {
      const num = parseInt(octet); // Convert the octet to a number.
      return num >= 0 && num <= 255 && octet === num.toString(); // Return true if the octet is between 0 and 255 and the octet is equal to the number converted back to a string.
    });
  }

  /**
   * Validates a password based on certain criteria.
   * @param {string} password - The password to be validated.
   * @returns {boolean} - True if the password is valid, false otherwise.
   */
  static validatePassword(password: string) {
    // Check if password is at least 8 characters long
    const isLengthValid = password.length >= 8;

    // Check if password contains at least one uppercase letter
    // The `some` method returns true if at least one element in the array satisfies the condition
    const hasUppercase = password
      .split("")
      .some(
        (char) => char === char.toUpperCase() && char !== char.toLowerCase()
      );

    // Check if password contains at least one lowercase letter
    const hasLowercase = password
      .split("")
      .some(
        (char) => char === char.toLowerCase() && char !== char.toUpperCase()
      );

    // Check if password contains at least one digit
    const hasDigit = password
      .split("")
      .some((char) => !isNaN(parseInt(char, 10)));

    return isLengthValid && hasUppercase && hasLowercase && hasDigit;
  }

  /**
   * Returns the missing letter in an array of consecutive letters.
   * @param {string[]} arr - An array of consecutive letters.
   * @returns {string} - The missing letter.
   */
  static findMissingAlpha(arr: string[]) {
    // `start` is the character code of the first character in the array
    let start = arr[0].charCodeAt(0);
    // `missingCharCode` is the character code of the missing character
    const missingCharCode = arr.reduce((missing: number | null, char) => {
      // `current` is the character code of the current character
      const current = char.charCodeAt(0);
      // if the current character code is more than one greater than the previous character code and `missing` is null then set `missing` to the character code of the missing character
      if (current - start > 1 && missing === null) {
        missing = start + 1;
      }
      // set `start` to the current character code
      start = current;
      // return `missing`
      return missing;
    }, null);
    // if `missingCharCode` is truthy then return the character that is one less than the character code
    return missingCharCode ? String.fromCharCode(missingCharCode) : "";
  }

  static countDown(num: number) {
    // Base case - if num is less than or equal to 0, log 'All done!' and return
    if (num <= 0) {
      console.log("All done!");
      return;
    }

    // Recursive case - log num, decrement num, and call countDown again
    console.log(num);
    num--;
    this.countDown(num);
  }

  /**
   * Returns the number at the given index of the Fibonacci sequence.
   * @param {number} num - The index of the Fibonacci sequence.
   * @returns {number} - The number at the given index of the Fibonacci sequence.
   */
  static fibonacci(num: number): number {
    // Base case - if num is less than 2, return num
    if (num < 2) return num;

    // Recursive case - return the sum of the previous two numbers
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  /**
   * Returns the factorial of a number.
   * @param {number} num - The number.
   * @returns {number} - The factorial of the number.
   */
  static factorial(num: number): number {
    // Base case: 0! and 1! are both 1
    if (num === 0 || num === 1) {
      return 1;
    }

    // Recursive case: n! = n * (n - 1)!
    return num * this.factorial(num - 1);
  }

  /**
   * Returns the result of raising the base to the power of the exponent.
   * @param {number} base - The base number.
   * @param {number} exponent - The exponent.
   * @returns {number} - The result of the calculation.
   */
  static power(base: number, exponent: number): number {
    // No recursion
    // Initialize result to 1
    let result = 1;

    // Multiply base by itself exponent times
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }

  /**
   * Returns an array of numbers from startNum to endNum, inclusive.
   * @param {number} startNum - The starting number.
   * @param {number} endNum - The ending number.
   * @returns {number[]} - An array of numbers.
   */
  static rangeOfNumbers(startNum: number, endNum: number): number[] {
    // Check if the startNum is equal to endNum (base case)
    if (startNum === endNum) {
      // If they are equal, return an array containing just the startNum
      return [startNum];
    }

    // If they are not equal, create a variable named 'numbers'
    // Call the rangeOfNumbers function recursively on a smaller range
    // This creates an array of numbers from startNum to endNum - 1
    const numbers = this.rangeOfNumbers(startNum, endNum - 1);

    // Push the current value of endNum to the 'numbers' array
    numbers.push(endNum);

    // Return the 'numbers' array containing all the numbers from startNum to endNum
    return numbers;
  }

  /**
   * Returns a flattened array.
   * @param {number[]} arr - The array containing nested arrays.
   * @returns {number[]} - The flattened array.
   */
  flattenArray(arr: []): never[] {
    // Create an empty array to store the result
    let result: never[] = [];

    // Loop through each item in arr
    for (const item of arr) {
      // If item is an array, call flattenArray again and concat the result to result
      if (Array.isArray(item)) {
        result = result.concat(this.flattenArray(item));
      } else {
        // If item is not an array, push it to result
        result.push(item);
      }
    }

    return result;
  }

  /**
   * Returns all possible permutations of the characters in a string.
   * @param {string} str - The string to permute.
   * @returns {string[]} - An array of all possible permutations of the characters in the string.
   */
  static permutations(str: string): string[] {
    // Create an array to store the permutations
    const result = [];

    // If str is an empty string, push an empty string to result and return
    if (str.length === 0) {
      result.push("");
      return result;
    }

    // Loop through each character in str
    for (let i = 0; i < str.length; i++) {
      // Get the first character
      const firstChar = str[i];
      // Get the rest of the string
      const restOfString = str.slice(0, i) + str.slice(i + 1);
      // Get the permutations of the rest of the string
      const subPermutations = this.permutations(restOfString);

      // Loop through each permutation in subPermutations
      for (let j = 0; j < subPermutations.length; j++) {
        // Push the first character and the permutation to result
        result.push(firstChar + subPermutations[j]);
      }
    }

    // Return result
    return result;
  }
}

export default QPresent;

class QArray {
  /**
   * Returns the largest number in an array.
   * @param {number[]} arr - The array of numbers.
   * @returns {number} - The largest number in the array.
   */
  static findMax(arr: number[]): number {
    return Math.max(...arr);
  }

  /**
   * Returns a new array with duplicates removed.
   * @param {any[]} arr - The array to remove duplicates from.
   * @returns {any[]} - The new array with duplicates removed.
   */
  static removeDuplicate(arr: []) {
    // Use the Set object to remove duplicates. This works because Sets only store unique values
    return Array.from(new Set(arr));
  }
}

export default QArray;

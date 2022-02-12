/**
 * Randomizes a note from pitch list.
 * @returns A random note from pitch list
 */
export function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

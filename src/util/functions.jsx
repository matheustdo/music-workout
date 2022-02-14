/**
 * Get a random value from a list
 * @returns A random value.
 */
export function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

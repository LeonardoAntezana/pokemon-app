export const CapitalizeWord = (word: string) => {
  const newValue = word.charAt(0).toUpperCase() + word.slice(1);
  return newValue;
}
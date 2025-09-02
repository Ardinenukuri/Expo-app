export const getStrandKeyFromName = (name: string): string => {
  if (!name) return '';
  return name.charAt(0).toLowerCase() + name.slice(1).replace(/\s+/g, '');
};
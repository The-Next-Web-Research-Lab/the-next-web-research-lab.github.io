export const toBool = function(value: any): boolean {
  return Boolean(value)
}

export const not = function(value: any): boolean {
  return !toBool(value)
}


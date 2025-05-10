// utils/convertArrayToObject.ts

export function convertArrayToObject<T>(array: T[]): T | null {
    if (Array.isArray(array) && array.length === 1) {
        return array[0];
    }
    return null; // or throw an error, or handle as needed
}
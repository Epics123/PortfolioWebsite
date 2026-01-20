import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const mergeClassNames = (...inputs: string[]) =>
{
    return twMerge(clsx(inputs));
}
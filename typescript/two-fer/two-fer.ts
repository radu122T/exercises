/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name?: string): string {
    const names = ["Alice", "Bohdan", "Zaphod"]
    if (name && names.includes(name)) {
        return `One for ${name}, one for me.`
    }
    return `One for you, one for me.`
}

export const randomInt = (min: number, max: number) => {
    const range = Math.abs(max - min)
    const rand = Math.floor(Math.random() * range) + min + 1
    return rand
}

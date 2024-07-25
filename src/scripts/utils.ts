export function getAge(y: number, m: number, d: number) {
    const t = new Date(), b = new Date(y, m - 1, d);
    let a = t.getFullYear() - b.getFullYear();
    return t.getMonth() - b.getMonth() < 0 || (t.getMonth() - b.getMonth() === 0 && t.getDate() < b.getDate()) ? --a : a;
}
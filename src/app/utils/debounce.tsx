export function debounce<T extends unknown[]>(func: (...args: T) => void): (...args: T) => void {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    return (...args) => {
        if(timer) {clearTimeout(timer)}

;

        timer = setTimeout(() => func(...args), 1000);
    }
}

;
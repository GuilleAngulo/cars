export function getAsString(value: string | string[] | undefined): string {
    if (value === undefined) {
        return '';
    }

    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
}

export function getValueNumber(value: string | string[]) {
    const str = getAsString(value);
    const number = parseInt(str);
    return isNaN(number) ? null : number;
}

export function getValueString(value: string | string[]) {
    const str = getAsString(value);
    return !str || str.toLowerCase() === 'all' ? null : str;
}

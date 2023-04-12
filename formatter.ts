type SuffixObject = {
    value: number;
    symbol: string;
};

// formatter.ts
// formatter.ts
const formatter = (number: number, currencySymbol: string = '$'): string => {
    if (typeof number !== 'number') {
        throw new Error('Invalid input: number must be a valid number.');
    }

    const sign = number < 0 ? '-' : '';
    const absNumber = Math.abs(number);

    const snValues = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: ' k' },
        { value: 1e6, symbol: ' Million' },
        { value: 1e9, symbol: ' Billion' },
        { value: 1e12, symbol: ' Trillion' },
        { value: 1e15, symbol: ' Quadrillion' },
    ];

    const regX = /\.0+$|(\.[0-9]*[1-9])0+$/;

    let i;
    for (i = snValues.length - 1; i > 0; i--) {
        if (absNumber >= snValues[i].value) {
            break;
        }
    }
    return sign + currencySymbol + (absNumber / snValues[i].value).toFixed(1).replace(regX, '$1') + snValues[i].symbol;
};

export default formatter;


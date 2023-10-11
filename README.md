# numbuffix

Test

A simple and lightweight number formatting library for converting numbers into a human-readable format with currency
symbols and metric suffixes (k, Million, Billion, etc.).

## Installation

Install the package using npm:

```bash
npm install numbuffix
```

## Usage

Import the formatter function from the "numbuffix" package and use it in your project:

```javascript
// ES6 module syntax
import formatter from 'numbuffix';

// CommonJS syntax
const formatter = require('numbuffix').default;

// Example usage
const formattedNumber = formatter(1500000); // Output: $1.5 Million
console.log(formattedNumber);

// Custom currency symbol
const customCurrency = formatter(1500000, '€'); // Output: €1.5 Million
console.log(customCurrency);
```

To use the formatter without a currency symbol, pass an empty string as the second argument:

```javascript
// No currency symbol
const noCurrency = formatter(1500000, ''); // Output: 1.5 Million
console.log(noCurrency);
```

## API

### `formatter(number: number, currencySymbol?: string): string`
`number`: The number you want to format.

`currencySymbol`: (Optional) The currency symbol to use. Default is $. Pass an empty string to use the formatter without a
currency symbol.

Returns a formatted string with the currency symbol (if specified) and the appropriate metric suffix.

## License

MIT

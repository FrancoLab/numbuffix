// formatter.test.ts
import formatter from './formatter';

describe('formatter', () => {
    it('should format numbers with appropriate suffixes and default currency symbol', () => {
        expect(formatter(1500)).toBe('$1.5 k');
        expect(formatter(1500000)).toBe('$1.5 Million');
        expect(formatter(1500000000)).toBe('$1.5 Billion');
    });

    it('should handle custom currency symbols', () => {
        expect(formatter(1500, '€')).toBe('€1.5 k');
        expect(formatter(1500000, '£')).toBe('£1.5 Million');
        expect(formatter(1500000000, '¥')).toBe('¥1.5 Billion');
    });

    it('should handle no currency symbol', () => {
        expect(formatter(1500, '')).toBe('1.5 k');
        expect(formatter(1500000, '')).toBe('1.5 Million');
        expect(formatter(1500000000, '')).toBe('1.5 Billion');
    });

    it('should handle negative numbers', () => {
        expect(formatter(-1500)).toBe('-$1.5 k');
        expect(formatter(-1500000)).toBe('-$1.5 Million');
        expect(formatter(-1500000000)).toBe('-$1.5 Billion');
    });

    it('should handle numbers less than 1000 correctly', () => {
        expect(formatter(0)).toBe('$0');
        expect(formatter(1)).toBe('$1');
        expect(formatter(999)).toBe('$999');
    });

    it('should handle non-integer values', () => {
        expect(formatter(1.5e3)).toBe('$1.5 k');
        expect(formatter(1.2345e6)).toBe('$1.2 Million');
        expect(formatter(1.2345e9)).toBe('$1.2 Billion');
    });

    it('should throw an error for non-number inputs', () => {
        expect(() => formatter("1500" as any)).toThrowError("Invalid input: number must be a valid number.");
        expect(() => formatter(null as any)).toThrowError("Invalid input: number must be a valid number.");
        expect(() => formatter(undefined as any)).toThrowError("Invalid input: number must be a valid number.");
    });
});

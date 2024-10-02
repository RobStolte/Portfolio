import {describe, expect, it}            from 'vitest';
import {CapitalizeFirst, toSentenceCase} from '@/scripts/stringConverters.ts';

describe('toSentenceCase', () => {
    it('should convert snake_case to sentence case', () => {
        const result = toSentenceCase('hello_world')
        expect(result).toBe('Hello world')
    })

    it('should convert kebab-case to sentence case', () => {
        const result = toSentenceCase('hello-world')
        expect(result).toBe('Hello world')
    })

    it('should convert camelCase to sentence case', () => {
        const result = toSentenceCase('helloWorld')
        expect(result).toBe('Hello world')
    })

    it('should convert PascalCase to sentence case without capitalize first', () => {
        const result = toSentenceCase('HelloWorld')
        expect(result).toBe('Hello world')
    })

    it('should convert PascalCase to sentence case with capitalize first', () => {
        const result = toSentenceCase('HelloWorld', false)
        expect(result).toBe('hello world')
    })
})

describe('CapitalizeFirst', () => {
    it('should capitalize the first letter of a string', () => {
        const result = CapitalizeFirst('hello')
        expect(result).toBe('Hello')
    })
})
import { describe, test, expect } from 'vitest'
import { sumOfTwoNumbers } from './sum.js'

describe("sum validation", () => {

    test("validate the sum function with numeric values", () => {
        expect(sumOfTwoNumbers(2, 3)).toBe(5)
    })

    test("validate the sum function with numbers passed as string", () => {
        expect(sumOfTwoNumbers('2', 4)).toBe(6)

    })

    test("validate the sum function  with numbers passed as string", () => {

        expect(sumOfTwoNumbers('2', 4)).not.toBe('24')
    })

    test("validate the sum function with non-convertible string values", () => {

 
        expect(sumOfTwoNumbers('A', 4)).toBe(NaN)
        expect(sumOfTwoNumbers('A', 'B')).toBe(NaN)
        expect(sumOfTwoNumbers('AVA', 10)).toBe(NaN)
    })
})

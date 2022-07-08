const { renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe('test in the useCounter', () => {
    test('should return two values by default', () => {
        const { result } = renderHook(() => useCounter(10))
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
    })

    test('should generate the counter with the value of 100', () => { 
        const { result } = renderHook(() => useCounter(100))
        expect( result.current.counter ).toBe(100);
    })
})
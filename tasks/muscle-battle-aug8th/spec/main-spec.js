const resolveInteger2QualityFactor = require('../js/main');

describe('分解质因数', () => {
    const num1 = 90;
    const num2 = 120;

    it('1.分解90质因数', () => {
        const result = resolveInteger2QualityFactor(num1);
        expect(result).toEqual('2335');
    })

    it('2.分解120质因数', () => {
        const result = resolveInteger2QualityFactor(num2);
        expect(result).toEqual('22235');
    })
})
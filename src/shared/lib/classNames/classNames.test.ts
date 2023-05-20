import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first arg', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });

    test('with addition classes', () => {
        const result = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(result);
    });

    test('with mods', () => {
        const result = 'someClass cls1 cls2 firstMod secondMod';
        expect(classNames('someClass', { firstMod: true, secondMod: true }, ['cls1', 'cls2']))
            .toBe(result);
    });

    test('with mods false', () => {
        const result = 'someClass cls1 cls2 firstMod';
        expect(classNames('someClass', { firstMod: true, secondMod: false }, ['cls1', 'cls2']))
            .toBe(result);
    });

    test('with mods undefined', () => {
        const result = 'someClass cls1 cls2 firstMod';
        expect(classNames('someClass', { firstMod: true, secondMod: undefined }, ['cls1', 'cls2']))
            .toBe(result);
    });
});

import { classNames } from 'shared/lib';

describe('classNames', () => {
  test('only class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('class + mod', () => {
    expect(classNames('someClass', { disabled: true })).toBe('someClass disabled');
  });

  test('class + 2 mods', () => {
    expect(classNames('someClass', { disabled: true, red: true })).toBe('someClass disabled red');
  });

  test('class + mod + falsy mod', () => {
    expect(classNames('someClass', { disabled: true, red: false })).toBe('someClass disabled');
  });

  test('class + mod + undefined mod', () => {
    expect(classNames('someClass', { disabled: true, red: undefined })).toBe('someClass disabled');
  });

  test('class + mod + add', () => {
    expect(classNames('someClass', { disabled: true }, ['danger'])).toBe('someClass disabled danger');
  });

  test('class + add', () => {
    expect(classNames('someClass', {}, ['danger'])).toBe('someClass danger');
  });
});

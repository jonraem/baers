import baers from '../index';

test('Gets Cock Bärs', () => {
  expect(baers.get()).toBe('Cock Bärs');
});

test('Logs Cock Bärs', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  baers.log();
  expect(consoleSpy).toHaveBeenCalledWith('Cock Bärs');
});

afterEach(() => {
  jest.clearAllMocks();
});

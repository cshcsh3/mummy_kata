import mummy from './mummy'

test('e', () => {
    expect(mummy('e')).toBe('mummy')
})

test('s',() => {
    expect(mummy('s')).toBe('s')
})

test('lost',() => {
    expect(mummy('lost')).toBe('lost')
})

test('aenoiom',() => {
    expect(mummy('aenoiom')).toBe('mummynmummym')
})
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './use-debounce.hook';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('foo', 500));
    expect(result.current).toBe('foo');
  });

  it('updates value after delay', () => {
    let value = 'foo';
    const { result, rerender } = renderHook(({ v }) => useDebounce(v, 300), {
      initialProps: { v: value },
    });
    expect(result.current).toBe('foo');
    value = 'bar';
    rerender({ v: value });
    expect(result.current).toBe('foo');
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(result.current).toBe('bar');
  });

  it('cleans up timeout on unmount', () => {
    const { unmount } = renderHook(() => useDebounce('foo', 200));
    unmount();
    // No error should be thrown
  });
});

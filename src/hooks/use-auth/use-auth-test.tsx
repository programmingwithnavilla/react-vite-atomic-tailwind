import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './use-auth.hook';

describe('useAuth hook', () => {
  it('returns null user by default', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    expect(result.current.user).toBeNull();
  });

  it('can login and logout', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    act(() => {
      result.current.login({ name: 'Navid', role: 'admin' });
    });
    expect(result.current.user).toEqual({ name: 'Navid', role: 'admin' });
    act(() => {
      result.current.logout();
    });
    expect(result.current.user).toBeNull();
  });

  it('throws if used outside provider', () => {
    // Suppress error output for this test
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => renderHook(() => useAuth())).toThrow();
    spy.mockRestore();
  });
});

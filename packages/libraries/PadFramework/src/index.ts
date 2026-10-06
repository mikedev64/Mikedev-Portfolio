export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function getViewportSize(): Readonly<{ width: number; height: number }> {
  if (!isBrowser()) {
    return { width: 0, height: 0 }
  }

  return { width: window.innerWidth, height: window.innerHeight }
}

export function onWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (event: WindowEventMap[K]) => void,
  options?: AddEventListenerOptions,
): () => void {
  window.addEventListener(type, listener, options)
  return () => window.removeEventListener(type, listener, options)
}
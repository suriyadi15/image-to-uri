export function onPasteImage(callback) {
  window.addEventListener('paste', (e) => {
    const clipboard = e.clipboardData?.files[0] ?? null

    if (clipboard?.type?.startsWith('image/')) {
      callback(clipboard)
    }
  })
}

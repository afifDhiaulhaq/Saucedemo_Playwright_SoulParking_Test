export default async function attachScreenshot(page, testInfo) {
  try {
    if (!page.isClosed()) {
      const fileName = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;
      await page.screenshot({ path: fileName, fullPage: true });
      await testInfo.attach('screenshot-on-error', {
        path: fileName,
        contentType: 'image/png',
      });
    } else {
      console.warn('❗ Page sudah tertutup, tidak bisa ambil screenshot.');
    }
  } catch (e) {
    console.warn('❗ Gagal ambil screenshot:', e.message);
  }
}

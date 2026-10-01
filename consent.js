// The cookie question. Google Analytics starts with every kind of storage denied (the head of each page
// sets that, and applies a choice already made, before gtag config runs). This file asks once, saves the
// answer in localStorage as pk-consent, and reopens from any [data-cookie-settings] button.
(() => {
  const KEY = 'pk-consent';
  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch (e) {} };

  const pill = 'height:32px;padding:0 14px;border:0;border-radius:999px;font:inherit;font-weight:500;cursor:pointer';
  const bar = document.createElement('div');
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Cookies');
  bar.style.cssText = 'position:fixed;left:50%;bottom:56px;transform:translateX(-50%);z-index:60;width:max-content;max-width:calc(100% - 32px);box-sizing:border-box;display:none;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 16px;padding:12px 12px 12px 18px;border-radius:12px;background:#ffffff;box-shadow:0 4px 12px rgba(32,32,32,0.08),0 0 0 1px rgba(32,32,32,0.05);font-family:Inter,"IBM Plex Sans",-apple-system,BlinkMacSystemFont,sans-serif;font-size:14px;line-height:1.5;color:#424242';
  bar.innerHTML = '<p style="margin:0;max-width:440px">Paperkites uses Google Analytics to count visits, with cookies. Fine by you?</p>'
    + '<div style="display:flex;gap:8px">'
    + `<button type="button" data-v="granted" style="${pill};background:#a8541f;color:#fcfcfc">Accept</button>`
    + `<button type="button" data-v="denied" style="${pill};background:#ffffff;color:#202020;box-shadow:0 1px 2px rgba(32,32,32,0.06),0 0 0 1px rgba(32,32,32,0.05)">Decline</button>`
    + '</div>';

  bar.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-v]');
    if (!b) return;
    save(b.dataset.v);
    if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: b.dataset.v });
    bar.style.display = 'none';
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-cookie-settings]')) return;
    bar.style.display = 'flex';
    bar.querySelector('button').focus();
  });

  document.body.appendChild(bar);
  if (!read()) bar.style.display = 'flex';
})();

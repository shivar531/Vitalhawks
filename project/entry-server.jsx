// ---------------------------------------------------------------------------
// Build-time render of each page to HTML (used only by scripts/prerender-seo.mjs,
// never shipped to the browser). Waits for all lazy pages to load, so the
// output is the real page content, not the loading screen.
// ---------------------------------------------------------------------------

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Writable } from 'node:stream';
import { AppShell } from './App.jsx';

export function render(url, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    let html = '';
    let renderError = null;
    let stream = null;
    let ready = false;

    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on('finish', () => (renderError ? reject(renderError) : resolve(html)));
    sink.on('error', reject);

    const timer = setTimeout(() => {
      if (stream) stream.abort();
      reject(new Error(`render timed out for ${url}`));
    }, timeoutMs);

    stream = ReactDOMServer.renderToPipeableStream(
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>,
      {
        onAllReady() {
          clearTimeout(timer);
          ready = true;
          if (stream) stream.pipe(sink);
        },
        onShellError(err) {
          clearTimeout(timer);
          reject(err);
        },
        onError(err) {
          if (!renderError) renderError = err;
        },
      }
    );
    // In case onAllReady fired before `stream` was assigned.
    if (ready) stream.pipe(sink);
  });
}

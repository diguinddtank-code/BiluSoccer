import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

// The card WhatsApp, iMessage, Facebook, LinkedIn and X show when someone shares
// a bilusoccer.com link. Used by every page (no page sets its own image).
export const alt = 'BISA – Bilu International Soccer Academy · Youth soccer in Metro Charleston, SC';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const VOLT = '#ccff00';
const DARK = '#0a1f14';

/** Bebas Neue (the site's display font) from Google Fonts; falls back to the default font if offline. */
async function bebas(): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const crest = await readFile(path.join(process.cwd(), 'public/brand/crest.png'));
  const crestSrc = `data:image/png;base64,${crest.toString('base64')}`;
  const display = await bebas();
  const head = display ? { fontFamily: 'Bebas', fontWeight: 400 as const, letterSpacing: 1 } : { fontWeight: 900 as const, letterSpacing: -2 };

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: `radial-gradient(circle at 78% 30%, #0f3d24 0%, ${DARK} 62%)`,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Field markings */}
        <div style={{ position: 'absolute', right: -120, top: 95, width: 440, height: 440, borderRadius: 440, border: '3px solid rgba(255,255,255,.08)', display: 'flex' }} />
        <div style={{ position: 'absolute', right: 98, top: 0, bottom: 0, width: 3, background: 'rgba(255,255,255,.08)', display: 'flex' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 14, background: VOLT, display: 'flex' }} />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px 0 92px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <img src={crestSrc} width={128} height={137} alt="" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 26, letterSpacing: 6, color: VOLT, fontWeight: 700 }}>BILU INTERNATIONAL</div>
              <div style={{ fontSize: 26, letterSpacing: 6, color: 'rgba(255,255,255,.75)', fontWeight: 700 }}>SOCCER ACADEMY</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, fontSize: display ? 132 : 84, lineHeight: 0.9, ...head }}>
            <div style={{ display: 'flex' }}>WHERE CHAMPIONS</div>
            <div style={{ display: 'flex' }}>
              ARE <span style={{ color: VOLT, marginLeft: 22 }}>BUILT.</span>
            </div>
          </div>

          <div style={{ display: 'flex', marginTop: 34, fontSize: 28, color: 'rgba(255,255,255,.82)' }}>
            Youth soccer U4–U18 · Ladson · Summerville · Charleston, SC
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: 40, gap: 18 }}>
            <div style={{ display: 'flex', background: VOLT, color: DARK, fontSize: 24, fontWeight: 800, padding: '12px 26px', borderRadius: 999 }}>bilusoccer.com</div>
            <div style={{ display: 'flex', fontSize: 22, color: 'rgba(255,255,255,.6)' }}>501(c)(3) nonprofit</div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: display ? [{ name: 'Bebas', data: display, weight: 400, style: 'normal' }] : undefined },
  );
}

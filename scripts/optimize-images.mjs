/**
 * Optimasi gambar sekali jalan untuk static export.
 *
 * Kenapa perlu: dengan `output: "export"` + `images.unoptimized`, Next.js
 * TIDAK mengoptimasi gambar saat build — file di `public/` dikirim apa adanya
 * ke browser. Jadi kompresi harus dilakukan di sini.
 *
 * Jalankan: node scripts/optimize-images.mjs
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const MAX_WIDTH = 1600;
const QUALITY = 78;

/** Batas ukuran yang dianggap wajar untuk gambar web. */
const TARGET_KB = 250;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const full = path.join(DIR, file);
  const before = (await stat(full)).size;
  const meta = await sharp(full).metadata();

  // Logo dibiarkan: PNG kecil, transparansi penting.
  if (file === "logo.png") {
    console.log(`${file.padEnd(18)} dilewati (logo, ${Math.round(before / 1024)}KB)`);
    continue;
  }

  const isOg = file.startsWith("og.");

  let pipeline = sharp(full).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  // og.jpg dipakai untuk preview link sosial: wajib JPEG asli 1200x675.
  if (isOg) {
    pipeline = pipeline.resize(1200, 675, { fit: "cover", position: "center" });
  }

  const out = await pipeline
    .jpeg({ quality: isOg ? 82 : QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();

  const after = out.length;
  const improved = after < before;

  if (improved) await writeFile(full, out);

  const pct = Math.round((1 - after / before) * 100);
  const flag = after > TARGET_KB * 1024 ? "  <-- masih besar" : "";
  console.log(
    `${file.padEnd(18)} ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB` +
      ` (${improved ? `-${pct}%` : "tidak diubah"})${flag}`,
  );
}

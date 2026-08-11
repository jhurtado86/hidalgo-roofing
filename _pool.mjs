import fs from 'fs';
const used = new Set(['image_68a468d95c7cd75eb8018a91-1.webp','image_68a468d95c7cd75eb8018a8f-1.jpeg',
 '492370175_1316323670501696_7101414963269473236_n.jpg','493008996_1316328533834543_5980886372519059572_n.jpg',
 'unnamed-23.jpg','unnamed-27.jpg','unnamed-41.jpg','unnamed-28.jpg','unnamed-2.png',
 '508825393_1366139115520151_5689395360219539266_n.jpg','unnamed-33.jpg']);
const excl = /^o-2025|^IMG_2456|^Sidewalks|^cea7d55d|^logo|^bbb|^cta-background|a91-1-2\.webp$/;
const files = fs.readdirSync('brand_assets').filter(f=>/\.(jpg|jpeg|png|webp)$/i.test(f))
  .filter(f=>!used.has(f) && !excl.test(f)).sort();
console.error('pool size: '+files.length);
const per = 9;
for (let s=0; s*per<files.length; s++){
  const cells = files.slice(s*per,(s+1)*per).map((f,i)=>
    `<figure><img src="/brand_assets/${encodeURIComponent(f)}"><figcaption>#${s*per+i+1} ${f}</figcaption></figure>`).join('\n');
  fs.writeFileSync(`_p${s+1}.html`,`<!doctype html><meta charset=utf-8><style>body{background:#fff;font:13px/1.3 monospace;margin:0;padding:10px}
  .g{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}figure{margin:0}
  img{width:100%;height:330px;object-fit:contain;background:#eee;display:block}
  figcaption{font-size:12px;word-break:break-all;padding:3px 0}</style><div class=g>${cells}</div>`);
}
console.error('sheets: '+Math.ceil(files.length/per));

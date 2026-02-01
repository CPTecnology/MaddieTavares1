// replace-images-cloudinary.js
import fs from "fs"
import path from "path"

const IMAGE_MAP = {
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915320/maddie_tavares/vyal4grafodjpaowbrrg.png": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915320/maddie_tavares/vyal4grafodjpaowbrrg.png",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915321/maddie_tavares/h2a3ah7gmqtq9606jhav.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915321/maddie_tavares/h2a3ah7gmqtq9606jhav.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915323/maddie_tavares/wruyd89vu3syyycabhbz.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915323/maddie_tavares/wruyd89vu3syyycabhbz.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915324/maddie_tavares/cbbpujs0ntldim0xscfj.png": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915324/maddie_tavares/cbbpujs0ntldim0xscfj.png",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915324/maddie_tavares/itbaurocsv8bptshlmbz.png": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915324/maddie_tavares/itbaurocsv8bptshlmbz.png",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915326/maddie_tavares/o0losgo1x6guips5wvlq.svg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915326/maddie_tavares/o0losgo1x6guips5wvlq.svg",
  "images\\entrada.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915328/maddie_tavares/bpccyvbbwnkh5sx35res.jpg",
  "images\\facial.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915329/maddie_tavares/fr4awzexcu1sxrrsneaf.jpg",
  "images\\logo.jpeg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915330/maddie_tavares/g2mlb7iezgo9b1dlbunj.jpg",
  "images\\logo.png": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915331/maddie_tavares/w5io81aj7dshw3h0ocfe.png",
  "images\\WhatsApp Image 2025-11-17 at 21.19.38.jpeg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915331/maddie_tavares/r42qe4mcfuvnkabx2pnu.jpg",
  "images\\whatsapp-20image-202025-11-17-20at-2021.jpeg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915332/maddie_tavares/ddpzpsf61z8wedppxcqw.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915333/maddie_tavares/ni9dzdtynqe7c2s69977.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915333/maddie_tavares/ni9dzdtynqe7c2s69977.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915334/maddie_tavares/lchzyqx5veo1mj2mfhdb.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915334/maddie_tavares/lchzyqx5veo1mj2mfhdb.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915335/maddie_tavares/pd6sl2lo1ulvur9x9usi.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915335/maddie_tavares/pd6sl2lo1ulvur9x9usi.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915336/maddie_tavares/x5mrmrj5vnpzotfgqioz.png": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915336/maddie_tavares/x5mrmrj5vnpzotfgqioz.png",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915337/maddie_tavares/evhb4b1vvpmmd79tlc4j.svg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915337/maddie_tavares/evhb4b1vvpmmd79tlc4j.svg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915338/maddie_tavares/rremc8wdlhwwpdijot6d.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915338/maddie_tavares/rremc8wdlhwwpdijot6d.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915339/maddie_tavares/abuk6gbcz45txoviah7i.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915339/maddie_tavares/abuk6gbcz45txoviah7i.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915340/maddie_tavares/voalh0amrnr4oybu4wyd.svg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915340/maddie_tavares/voalh0amrnr4oybu4wyd.svg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915342/maddie_tavares/u3e5n6ojut3n3oxqwnkv.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915342/maddie_tavares/u3e5n6ojut3n3oxqwnkv.jpg",
  "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915342/maddie_tavares/bsqgifrqtlnxcbppqjlk.jpg": "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915342/maddie_tavares/bsqgifrqtlnxcbppqjlk.jpg",
}

const VALID_EXT = [".js", ".ts", ".tsx", ".jsx", ".html", ".css"]

function walk(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)

    if (stat.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(file)) continue
      walk(full)
    } else {
      const ext = path.extname(full)
      if (!VALID_EXT.includes(ext)) continue

      let content = fs.readFileSync(full, "utf8")
      let original = content

      for (const [local, cloud] of Object.entries(IMAGE_MAP)) {
        const normalized = local.replace(/\\/g, "/")
        content = content.split(local).join(cloud)
        content = content.split(normalized).join(cloud)
      }

      if (content !== original) {
        fs.writeFileSync(full, content, "utf8")
        console.log("✔ Substituído em:", full)
      }
    }
  }
}

console.log("🚀 Substituindo imagens por links do Cloudinary...")
walk(process.cwd())
console.log("✅ Concluído!")

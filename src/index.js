import { importer } from 'ipfs-unixfs-importer'

async function main () {
  console.info(importer)
}

main().catch((err) => {
  console.error(err)
})

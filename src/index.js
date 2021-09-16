import { create } from 'ipfs'

async function main () {
  const ipfs = await create()

  await ipfs.stop()
}

main().catch((err) => {
  console.error(err)
})

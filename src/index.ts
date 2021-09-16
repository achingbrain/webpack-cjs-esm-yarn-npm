import { create } from 'ipfs'

async function main () {
  const ipfs = await create()

  await ipfs.stop()
}

main().catch((err:any) => {
  console.error(err)
})

import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  resizeBy.json({
    status: `ok`,
    data: `Crypto Pasyments Home`
  })
})

export default router
import { Router } from 'express'
import { shortenUrl, goToUrl, editUrl, deleteUrl } from '../controllers/url-controller.js'


const router = Router()

router.post('/', shortenUrl)
router.get('/:shortUrl', goToUrl)
router.put('/:shortUrl', editUrl)
router.delete('/:shortUrl', deleteUrl)

export default router
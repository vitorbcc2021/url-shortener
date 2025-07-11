import { Router } from 'express'
import { shortenUrl, goToUrl, editUrl, deleteUrl } from '../controllers/url-controller.js'
import { authenticate } from '../middlewares/authenticate-jwt.js'
import { authorize } from '../middlewares/authorize-jwt.js'


const router = Router()

router.post('/', authenticate, authorize(['client', 'admin']), shortenUrl)
router.get('/:shortUrl', goToUrl)
router.put('/:shortUrl', authenticate, authorize(['client', 'admin']), editUrl)
router.delete('/:shortUrl', authenticate, authorize(['client', 'admin']), deleteUrl)

export default router
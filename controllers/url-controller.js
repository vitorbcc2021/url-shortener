import { randomU32 } from 'hyperdyperid/lib/randomU32.js'
import { UrlModel } from '../models/url-model.js'
import { UrlUpdateDto } from '../dto/url-update-dto.js'



export async function shortenUrl(req, res) {
    const { originalUrl } = req.body
    const id = randomU32(0, 10000)


    const owner = req.user.username

    const model = new UrlModel({
        originalUrl: originalUrl,
        shortUrl: id,
        owner: owner
    })

    try {
        await model.save()
        return res.status(201).json({ originalUrl: originalUrl, shortenUrl: id, owner: owner })
    } catch (error) {
        return res.status(400).json({ erro: 'Erro ao tentar encurtar a URL!' })
    }
}



export async function goToUrl(req, res) {
    const { shortUrl } = req.params;

    if (shortUrl === 'favicon.ico') {
        return res.status(204).end();
    }

    try {
        const urlFound = await UrlModel.findOne({ shortUrl: shortUrl });

        if (urlFound) {
            let targetUrl = urlFound.originalUrl;
            if (!/^https?:\/\//i.test(targetUrl)) {
                targetUrl = 'http://' + targetUrl;
            }

            return res.status(302).redirect(targetUrl);
        } else {
            return res.status(404).json({ message: 'URL not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}



export async function getUrlList(req, res) {
    const { username } = req.user

    try {
        const urlList = await UrlModel.find({ owner: username })

        return res.status(200).json(urlList)
    } catch (error) {
        return res.status(404).json({ error: error })
    }
}



export async function editUrl(req, res) {
    const urlUpdateDto = new UrlUpdateDto(req.body)
    const { shortUrl } = req.params

    const owner = req.user.username
    const filter = { shortUrl: shortUrl, owner: owner }

    try {
        const url = await UrlModel.findOneAndUpdate(filter, urlUpdateDto, { new: true })

        if (url) {
            return res.status(201).json(urlUpdateDto)
        } else {
            return res.status(404).json({ res: 'Not found!' })
        }
    } catch (error) {
        return res.status(400).json({ error: 'Ocorreu um erro ao tentar editar a URL.' })
    }
}



export async function deleteUrl(req, res) {
    const { shortUrl } = req.params
    const owner = req.user.username

    try {
        const url = await UrlModel.findOneAndDelete({ shortUrl: shortUrl, owner: owner })

        if (url) {
            return res.status(204).json('Deleted!')
        } else {
            return res.status(404).json({ res: 'Not found!' })
        }
    } catch (error) {
        res.status(400).json({ error: 'Ocorreu um erro ao tentar deletar a URL encurtada' })
    }
}
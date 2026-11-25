import * as uuid from 'uuid'
import * as path from 'path'
import * as fs from 'fs'

class FileService {
    async saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const staticDir = path.resolve('static')

            if (!fs.existsSync(staticDir)) {
                fs.mkdirSync(staticDir, { recursive: true })
            }

            const filePath = path.join(staticDir, fileName)
            console.log({fileName, filePath})
            await file.mv(filePath)
            return fileName
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new FileService()
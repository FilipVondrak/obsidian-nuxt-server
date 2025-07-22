import { defineNuxtModule } from 'nuxt/kit'
import {copy, ensureDir, stat} from 'fs-extra'
import { resolve } from 'path'
import {basename, extname} from "pathe";

export default defineNuxtModule({
    meta: {
        name: 'copy-images',
    },
    async setup(_options, nuxt) {
        const vaultPath = resolve(nuxt.options.rootDir, 'vault')
        const imagesPath = resolve(nuxt.options.rootDir, 'public', 'images')

        const imageExtensions = new Set([
            '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.avif'
        ])

        // make sure the directories exist
        await ensureDir(vaultPath);
        await ensureDir(imagesPath);

        await copy(vaultPath, imagesPath, {
            overwrite: true,
            filter: async (src) => {
                try {
                    const fileStat = await stat(src)

                    // If it's a directory, keep checking its contents
                    if (fileStat.isDirectory()) return true

                    // Only include if it's an image
                    const ext = extname(src).toLowerCase()
                    return imageExtensions.has(ext)
                } catch (err) {
                    console.warn(`❌ Failed to stat "${src}"`, err)
                    return false
                }
            }})

        console.log('✔ Vault images copied to public/images.')
    }
})

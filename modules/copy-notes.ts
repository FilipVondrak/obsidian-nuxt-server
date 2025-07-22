import { defineNuxtModule } from 'nuxt/kit'
import {copy, ensureDir} from 'fs-extra'
import { resolve } from 'path'
import {basename} from "pathe";

export default defineNuxtModule({
    meta: {
        name: 'copy-vault',
    },
    async setup(_options, nuxt) {
        const vaultPath = resolve(nuxt.options.rootDir, 'vault')
        const contentPath = resolve(nuxt.options.rootDir, 'content', 'notes')

        // make sure the directories exist
        await ensureDir(vaultPath);
        await ensureDir(contentPath);

        await copy(vaultPath, contentPath, {
            overwrite: true,
            filter: (src) => {
                // Skip anything that has a hidden name (starts with ".")
                const name = basename(src)
                return !name.startsWith('.')
            }
        })

        console.log('✔ Vault contents copied to content.')
    }
})

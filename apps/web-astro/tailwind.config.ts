import type { Config } from 'tailwindcss'
import base from '@magnus/tailwind-config/tailwind.config'

const config: Pick<Config, 'presets'> = {
    ...base
}
export default config
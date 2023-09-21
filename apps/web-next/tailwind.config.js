import base from '@magnus/tailwind-config/tailwind.config'

const config = {
    ...base,
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ]

}
export default config
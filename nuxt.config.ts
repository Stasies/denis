import type { NuxtConfig } from '@nuxt/types'
const config: NuxtConfig = {
      app: {
        head: {
            title: 'Денис - милашка',
            htmlAttrs: {
            lang: 'ru',
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },
            {
                hid: 'description',
                name: 'description',
                content:
                'Денис - милашка',
            },
            { hid: 'og:image', property: 'og:image', content: 'og.jpeg' },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Централизованная библиотечная система Выборгского района',
            },
            {
                hid: 'og:site_name',
                name: 'og:site_name',
                content: 'Централизованная библиотечная система Выборгского района',
            },
            ],
            script: [
            // <script src="https://myawesome-lib.js"></script>
            { src: 'https://awesome-lib.js' }
            ],
            link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { href:"https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,400&family=Neucha&display=swap", rel:"stylesheet"},
            { rel: 'stylesheet', href: 'https://awesome-lib.css' },     
            { rel:"preconnect", href:"https://fonts.googleapis.com"},
            { rel:"preconnect", href:"https://fonts.gstatic.com" },


            ],
            // please note that this is an area that is likely to change
            style: [
              { rel: 'stylesheet', href: '@/assets/sass/main.sass' }
            ],
            noscript: [
            // <noscript>JavaScript is required</noscript>
            { children: 'JavaScript is required' }
            ]
        },
        css: [
    "~/assets/global.css",
],
        
    }
}
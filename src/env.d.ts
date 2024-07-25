/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly STORYBLOK_TOKEN: string
    readonly STEAM_API_KEY: string
    readonly STEAM_USER_ID: string
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
}




interface ImportMeta {
    readonly env: ImportMetaEnv
}
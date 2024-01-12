/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_ENDPOINT: string
    readonly VITE_MAPBOX_ACCESS_TOKEN: string

    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
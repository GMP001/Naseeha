/// <reference types="vite/client" />

// Allow images
declare module '*.png' { const src: string; export default src; }
declare module '*.jpg' { const src: string; export default src; }
declare module '*.jpeg' { const src: string; export default src; }

// Allow CSS files
declare module '*.css' {
  const content: string;
  export default content;
}

// Special for Ant Design
declare module 'antd/dist/reset.css' {
  const content: string;
  export default content;
}

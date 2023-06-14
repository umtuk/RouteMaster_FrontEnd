declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.png';

declare global {
  interface Window {
    kakao: any;
  }
}

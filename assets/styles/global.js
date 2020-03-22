import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    /* fonts */
    --font_heading: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font_body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";


    /* colors */
    --color_heading: #37383c;
    --color_body: #6b7c93;
    --color_body-dark: #51637b;
    --color_blue: #456cac;
    --color_blue-light: #3d91f9;
    --color_gray-light: #f4f9ff;
    --color_gray-light2: #f6f9fc;
    --color_green-light: #e6f4f1;
    --color_border: #dce4ec;
    
    --color__dark: #282a36;
    --color__dark100: #363848;
    --color__dark200: #44475a;
    --color__foreground: #f8f8f2;
    --color__comment: #6272a4
    --color__cyan: #8be9fd;
    --color__green: #50fa7b;
    --color__orange: #ffb86c;
    --color__pink: #ff79c6;
    --color__purple: #bd93f9;
    --color__red: #ff5555;
    --color__yellow: #f1fa8c;
  }

  * {
    outline: none;
  }

  html {
    font-size: 20px;
  }

  body {
    font-size: 1rem;
    font-family: var(--font_body);
    color: var(--color_body);
    background-color: var(--color__dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    font-kerning: auto;
    min-height: 100vh;
  }

  img {
    margin: 0;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font_heading);
    color: #fff;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.875rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 0.875rem;
  }

  .select-wrap {
    position: relative;
    background: var(--color__dark200);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 5px;

    select {
      position: relative;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: none;
      border-radius: 0;
      border: none;
      display: block;
      width: 100%;
      padding: 10px 40px 10px 20px;
      color: #fff;
      font-size: 16px;
      z-index: 1;
    }
    
    svg {
      position: absolute;
      top: 12px;
      right: 15px;
      width: 13px;

      path {
        fill: var(--color__green);
      }
    }
  }

  form {
    margin: 0;

    label {
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      display: block;
      margin-bottom: 10px;
    }
  }

  input[type="text"],
  input[type="number"],
    input[type="search"] {
    background: var(--color__dark200);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    display: block;
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }
`

export default GlobalStyle

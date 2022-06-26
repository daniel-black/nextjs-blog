// Top level component common across all different pages
// Load global styles here

// Use App component to keep state when navigating between pages

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
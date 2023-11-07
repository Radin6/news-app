# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

TODO
-Change local search to API base search
-Finish filter menu
-When nothing is written fetchURL is default [country: us / language: en] and ask to writte something

top-headlines = [q, country, category, apikey]

everything = [q, from, language , sortBy ,apikey]

Example
-from: 2023-11-06

Everithing:
https://newsapi.org/v2/${searchType}?q=${query}&from=${date}&sortBy=${sortBy}&apiKey=${API_KEY}
Top:
https://newsapi.org/v2/${searchType}?q=${query}?country=${country}&apiKey=${API_KEY}

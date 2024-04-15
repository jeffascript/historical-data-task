## ⏰ Implementation time

- Approximately **110mins/ 1hr:50mins**. The time does not include what it took to update this README file, neither does it include the 10-15mins total break in between I took.

## 🧐 How To Test the App (Locally)

- [ ] `pnpm install`
- [ ] `pnpm run dev`

## ⚙️ Node version

- Node v.16xx

## ✅ Definition of Done

- [x] The component renders a canvas element that visually represents the time-series data
- [x] The chart accurately plots “activepower_kW” and “reactivepower_kVAr” for both BESS and PV assets over a 24-hour period
- [x] The chart handles variable intervals of data, including standard 5-second intervals, longer intervals during communication loss
- [x] The chart displays both negative and positive values correctly on both axes.
- [x] The component is tested with sample JSON data to ensure accuracy.
- [x] The project is well-maintained and can be easily extended

## 🛠️ Things to Improve with longer time allotment:

- Scale and Responsiveness
- Legend
- Tooltips
- Unit Testing
- Styling and Design

Happy Coding! 👋🏽

==

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

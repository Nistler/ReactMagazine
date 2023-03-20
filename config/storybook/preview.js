export const parameters = {
  actions: { arTypesRegex: '^on[A-Z].*' },
  controls: {
    matches: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const key = 'CURRENT_THEME';
const defaultTheme = 'light';

export function saveTheme(theme: string) {
  localStorage.setItem(key, theme);
}

export function readTheme() {
  const theme = localStorage.getItem(key) || defaultTheme;
  return theme;
}
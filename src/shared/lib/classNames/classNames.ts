type Mods = Record<string, boolean | string>

export function classNames(cls: string, inputMods: Mods = {}, additional: string[] = []) {
  return [
    cls,
    ...Object.entries(inputMods).filter(([, value]) => Boolean(value)).map(([key]) => key),
    ...additional.filter(Boolean),
  ].join(' ').trim();
}

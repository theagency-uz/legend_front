export const fallbackLng = "ru";
export const languages = [fallbackLng, "uz"];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

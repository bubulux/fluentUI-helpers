type TAriaAttributes = Record<string, string | boolean | undefined>;

export default function useAriaAprops(
  props: Record<string, unknown>,
): TAriaAttributes {
  return Object.keys(props).reduce((acc, key) => {
    if (key.startsWith("aria-")) {
      // @ts-expect-error - we know that key is a string, its just difficult to prove to TS by doing key.startsWith
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

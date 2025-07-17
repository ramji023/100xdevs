import { atom, selector } from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 0,
});

const evenSelector = selector({
  key: "isEven",
  get: function ({ get }) {
    const currentCount = get(counterAtom);
    return currentCount % 2 === 0;
  },
});

export { counterAtom, evenSelector };

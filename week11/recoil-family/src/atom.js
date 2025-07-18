import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";

// export const todosAtomFamily = atomFamily({
//   key: "todosAtomFamily",
//   default: (id) => {
//     return TODOS.find((x) => x.id === id);
//   },
// });

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => {
      return async ({ get }) => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const data = await response.json();
        return data;
      };
    },
  }),
});

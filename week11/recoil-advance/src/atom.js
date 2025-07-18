import { atom, selector } from "recoil";

// export const notifications = atom({
//   key: "notifications",
//   default: {
//     userId: 0,
//     id: 0,
//     title: "",
//     completed: false,
//   },
// });

// asynchronous data queries
export const notifications = atom({
  key: "notifications",
  default: selector({
    key: "todoInfo",
    get: async function getNotifications() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/3"
      );
      const data = await response.json();
      return data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationCount",
  get: function ({ get }) {
    const allNotifications = get(notifications);
    return allNotifications.userId + allNotifications.id;
  },
});

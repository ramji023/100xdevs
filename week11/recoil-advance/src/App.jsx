import React, { useEffect } from "react";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
} from "recoil";
import { notifications, totalNotificationSelector } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Topbar />
    </RecoilRoot>
  );
}

function Topbar() {
  const [notificationsValue, setNotifications] =
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE(notifications);
  const totalNotificationValue = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
    totalNotificationSelector
  );

  // console.log("notifications : ", notificationsValue);
  // async function getNotifications() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/2"
  //   );
  //   const data = await response.json();
  //   setNotifications(data);
  // }
  // useEffect(() => {
  //   getNotifications();
  // }, []);

  return (
    <>
      {/* <button>Home</button>
      <button>My Network ({networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me ({totalNotificationValue})</button> */}
      <h2>{notificationsValue.userId}</h2>
      <h2>{notificationsValue.id}</h2>
      <h3>{notificationsValue.title}</h3>
      <p>{notificationsValue.completed}</p>
      <b>{totalNotificationValue}</b>
    </>
  );
}

// function Profile() {
//   // const setMessageCount = useSetRecoilState(messageAtom);
//   // const totalNotificationValue = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
//   //   totalNotificationSelector
//   // );
//   return (
//     <button onClick={() => setMessageCount((curr) => curr + 1)}>
//       Me ({totalNotificationValue})
//     </button>
//   );
// }
export default App;

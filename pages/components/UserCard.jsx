import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";
import UserCardDetail from "./UserCardDetail";
import { useState } from "react";

export default function UserCard(props) {
  const [show, setShow] = useState(false);
  function onClickHn() {
    if (show === false) setShow(true);
    else setShow(false);
  }
  return (
    <div className="border-bottom" onClick={() => onClickHn()}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto"> {props.name}</span>
        {!show ? <IconChevronUp /> : <IconChevronDown />}
      </div>

      {show ? (
        <UserCardDetail email={props.email} address={props.address} />
      ) : null}
    </div>
  );
}
//      <div className="border-bottom">
//   {/* main section */}
//   <div className="d-flex align-items-center p-3">
//     <img
//       src="/profile-placeholder.jpeg"
//       width="90px"
//       class="rounded-circle me-4"
//     />
//     <span className="text-center display-6 me-auto">Name...</span>
//     <IconChevronDown />
//   </div>

//   {/* UserCardDetail is hidden */}
// </div>

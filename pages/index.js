import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";
import axios from "axios";
import { useState } from "react";
import UserCard from "./components/UserCard";

export default function Home() {
  const [genAmount, setGenamount] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (genAmount < 1) {
      alert("invalid number");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );
    const newUser = [];
    for (const x of resp.data.results) {
      newUser.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }
    setUsers(newUser);
  };
  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          id="input"
          onChange={(e) => setGenamount(e.target.value)}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      <p className="text-center mt-3 text-muted fst-italic">
        made by Nantawat Nokvoharn 620610795
      </p>

      {users.map((x) => (
        <UserCard
          name={x.name}
          img={x.imgUrl}
          email={x.email}
          address={x.address}
        />
      ))}
    </div>
  );
  // return (
  //   <div style={{ maxWidth: "700px" }} className="mx-auto">
  //     {/* App Header */}
  //     <p className="display-4 text-center fst-italic m-4">
  //       Multiple Users Generator
  //     </p>

  //     {/* Input Section */}
  //     <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
  //       Number of User(s)
  //       <input
  //         className="form-control text-center"
  //         style={{ maxWidth: "100px" }}
  //         type="number"
  //       />
  //       <button class="btn btn-dark" onClick={() => genUsers()}>
  //         Generate
  //       </button>
  //     </div>

  //     {/* Example of folded UserCard */}
  //     <div className="border-bottom">
  //       {/* main section */}
  //       <div className="d-flex align-items-center p-3">
  //         <img
  //           src="/profile-placeholder.jpeg"
  //           width="90px"
  //           class="rounded-circle me-4"
  //         />
  //         <span className="text-center display-6 me-auto">Name...</span>
  //         <IconChevronDown />
  //       </div>

  //       {/* UserCardDetail is hidden */}
  //     </div>

  //     {/* Example of expanded UserCard */}
  //     <div className="border-bottom">
  //       {/* main section */}
  //       <div className="d-flex align-items-center p-3">
  //         <img
  //           src="/profile-placeholder.jpeg"
  //           width="90px"
  //           class="rounded-circle me-4"
  //         />
  //         <span className="text-center display-6 me-auto">Name...</span>
  //         <IconChevronUp />
  //       </div>

  //       {/* UserCardDetail*/}
  //       <div className="text-center">
  //         <p>
  //           <IconMailForward /> Email...
  //         </p>
  //         <p>
  //           <IconMapPins /> Address...
  //         </p>
  //       </div>
  //     </div>

  //     {/* made by section */}
  //     <p className="text-center mt-3 text-muted fst-italic">
  //       made by Chayanin Suatap 12345679
  //     </p>
  //   </div>
  // );
}

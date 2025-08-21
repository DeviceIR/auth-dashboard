import React from "react";

//use a little tailwind
// import styles from "message.module.scss";

export default function Message({ message }: { message: string }) {
  return (
    <div className="font-bold text-center wrap-normal tracking-widest">
      {message}
    </div>
  );
}

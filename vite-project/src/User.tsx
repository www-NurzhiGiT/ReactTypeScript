import React from "react";

type UserProps = { title: string; age?: number; image?: string };

function User({ title, age, image }: UserProps) {
  return (
    <>
      User {title} {age}
      <img src={image} alt="" />
    </>
  );
}

export default User;

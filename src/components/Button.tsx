import React from "react";

interface Elements {
  title: string;
  subtitle: string;
}

function Button({ title, subtitle }: Elements) {
  return (
    <div className=" bg-neutral-700 opacity-50 rounded-md p-5 w-[200px] h-[150px] flex flex-col justify-center hover:cursor-pointer hover:bg-amber-900 hover:text-white hover:backdrop-opacity-15">
      <h1 className="font-light text-4xl pb-2">{title}</h1>
      <h4 className="font-light text-2xl">{subtitle}</h4>
    </div>
  );
}

export default Button;

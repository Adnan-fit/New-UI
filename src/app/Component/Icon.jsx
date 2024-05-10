import React from "react";
import Image from "next/image";

const Icon = ({ name }) => {
  return <Image src={`/icons/${name}.svg`} alt={name} width={10} height={10}/>;
};

export default Icon;

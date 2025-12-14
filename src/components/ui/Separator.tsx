import React from 'react';
import { Diamond } from "lucide-react";
import { COLORS } from "@/lib/constants";

type SeparatorProps = {
  text: string;
};

const Separator = ({ text }: SeparatorProps) => {
  return (
    <div className="w-full my-10">
      <Diamond className="h-4 w-4 mx-auto" fill={COLORS.blue} stroke={COLORS.blue}/>
      <h4 className="text-xl font-semibold text-black text-center font-sans pt-2">{text}</h4>
    </div>
  );
};

export default Separator;

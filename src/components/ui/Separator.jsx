import React from 'react';
import {Diamond} from "lucide-react";

const Separator = ({text}) => {
  return (
    <div className="w-full my-10">
      <Diamond className="h-4 w-4 mx-auto" fill={"#3959FF"} stroke={"#3959FF"}/>
      <h4 className="text-xl font-semibold text-black text-center font-sans pt-2">{text}</h4>
    </div>
  );
};

export default Separator;
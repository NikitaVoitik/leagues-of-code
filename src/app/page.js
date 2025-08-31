import Main from "@/components/main";
import Approach from "@/components/aproach";
import Process from "@/components/process";
import Separator from "@/components/separator";

export default function Home() {
  return (
    <div
      className="font-sans min-h-screen"
      style={{
        backgroundColor: '#FAFAFA',
        backgroundImage: `
          linear-gradient(to right, #F4F4F4 1px, transparent 1px),
          linear-gradient(to bottom, #F4F4F4 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    >
      <Main/>
      <Separator text={"OUR APPROACH"}/>
      <Approach/>
      <Separator text={"OUR PROCESS"}/>
      <Process/>
    </div>
  );
}
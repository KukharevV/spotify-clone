import Sidebar from "./sidebar";

export const PlayerLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="bg-black absolute top-0 bottom-0 left-0 w-[250px] h-[calc(100vh-90px)]">
        <Sidebar />
      </div>
      <div className="bg-slate-500 justify-center ml-[250px]">{children}</div>
      <div className="bg-gray-900 w-screen absolute z-1 left-0 bottom-0 h-[90px]">
        Player
      </div>
    </div>
  );
};

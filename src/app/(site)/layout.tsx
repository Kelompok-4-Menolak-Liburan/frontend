import Sidebar from "@/components/sidebar/sidebar";
import { Toaster } from "react-hot-toast";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <Toaster />
      <div className="flex h-screen w-full bg-custom-purple-400">
        <Sidebar />
        <div className="max-lg:w-screen lg:flex-1 lg:pl-[226px] xl:pl-[253px]">
          {children}
        </div>
      </div>
    </body>
  );
};

export default SiteLayout;

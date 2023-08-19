
import Sidebar from "@/components/sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <div className="flex w-full h-screen bg-custom-purple-400">
          <Sidebar />
          <div className="overflow-y-scroll flex-1">{children}</div>
        </div>
    </body>
  );
};

export default SiteLayout;

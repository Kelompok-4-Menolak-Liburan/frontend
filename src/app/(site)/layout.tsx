import Sidebar from "@/components/sidebar/sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <div className="flex h-screen w-full bg-custom-purple-400">
        <Sidebar />
        <div className="max-lg:w-screen lg:flex-1 lg:pl-[253px]">
          {children}
        </div>
      </div>
    </body>
  );
};

export default SiteLayout;

import Sidebar from "@/components/sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <div className="flex h-screen w-full bg-custom-purple-400">
        <Sidebar />
        <div className="flex-1 pl-[310px]">{children}</div>
      </div>
    </body>
  );
};

export default SiteLayout;

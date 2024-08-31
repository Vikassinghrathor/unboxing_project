function SidebarMenu() {
  return (
    <div className="flex flex-col overflow-hidden pt-2.5 text-lg font-semibold text-white bg-neutral-900 border-2 border-solid border-neutral-700 border-opacity-50 max-w-[334px] shadow-[2px_4px_8px_rgba(13,13,13,1)]">
      {[
        { label: "Gallery", paddingRight: "pr-56" },
        { label: "Specifications", paddingRight: "pr-44" },
        { label: "Key Notes", paddingRight: "pr-56" },
        { label: "Company Profile", paddingRight: "pr-40" },
        { label: "Performance", paddingRight: "pr-48" },
        { label: "Experience", paddingRight: "pr-52" },
        { label: "Review", paddingRight: "pr-56" },
        { label: "Safety", paddingRight: "pr-56" },
        { label: "Queries", paddingRight: "pr-56" },
        { label: "Pre-Purchase", paddingRight: "pr-48", textColor: "text-orange-500", bgColor: "bg-zinc-800" },
        { label: "Post-Purchase", paddingRight: "pr-44" },
        { label: "Warranty", paddingRight: "pr-56" },
        { label: "Seller", paddingRight: "pr-56" },
        { label: "Accessories", paddingRight: "pr-48" },
        { label: "Services", paddingRight: "pr-56" },
      ].map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-end mt-8 w-full whitespace-nowrap ${item.bgColor || ""} ${item.textColor || ""}`}
        >
          <div className={`gap-2.5 self-stretch py-2.5 ${item.paddingRight} pl-7 w-full`}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidebarMenu;

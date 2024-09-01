const HeaderNavigation = () => {
  const navItems = [
    { label: "Repair Services", isActive: true },
    { label: "Replacement Policy", isActive: false },
    { label: "Safety & Energy Efficiency", isActive: false },
  ];

  return (
    <nav className="flex items-center max-w-[947px] w-full text-lg font-medium text-white pb-16">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b2cb4b3e6d6422356231fb99964bfa3452d8b11900cfc03c52f8ccefaa4b473?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
        alt="Left navigation"
        className="w-10 h-10 object-contain"
      />
      <div className="flex grow items-center justify-between ml-4">
        <div className="flex items-center space-x-10">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                item.isActive ? "text-orange-500" : ""
              }`}
            >
              <div>{item.label}</div>
              {item.isActive && (
                <div className="h-px bg-orange-500 mt-1" />
              )}
            </div>
          ))}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8791ac5faa3874b88d256266e901a533431a808490afa5568aeb52c44e432b9e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          alt="Right navigation"
          className="w-10 h-10 object-contain"
        />
      </div>
    </nav>
  );
};

export default HeaderNavigation;
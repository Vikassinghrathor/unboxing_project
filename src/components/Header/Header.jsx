const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center bg-black p-3 w-full mt-5">
      {/* Left Section: Logo and Product Information */}
      <div className="flex items-center gap-4 flex-1 min-w-[200px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc51886864f04eacf41f1fbea9a773ef5a929415e9fce5db7fb8edf2202afd4"
          alt="Menu Icon"
          className="object-contain w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="text-xl font-semibold text-orange-500 md:text-3xl">
          Product Information
        </h1>
      </div>

      {/* Right Section: Date, Notification, and Profile */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Date and Notification */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-neutral-500 md:text-base">
            08 February, Thursday
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9eb85d79e37c1fd2e27037465e98064f3fea5bf2450bd2bca86dceb4179a84"
            alt="Notification Icon"
            className="object-contain w-6 h-6 md:w-8 md:h-8"
          />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="text-right">
            <div className="text-sm font-semibold text-stone-300 md:text-base">
              Pia Yadav
            </div>
            <div className="text-xs text-neutral-500">Expert</div>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300 shadow-[0px_2px_8px_rgba(245,245,245,0.2)]" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb26f157a711ae66541df8e6f6def58a8c018d3fee8cc024ae815097e6f9472"
            alt="Dropdown Icon"
            className="object-contain w-6 h-6 md:w-8 md:h-8"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

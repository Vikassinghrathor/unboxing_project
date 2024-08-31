function AddQuestion() {
  return (
    <div className="flex flex-col items-end max-w-[947px]">
      <div className="flex flex-col w-full text-base text-white max-md:max-w-full">
        <div className="flex flex-col justify-center py-5 pr-96 pl-96 w-full rounded border border-orange-500 border-dashed max-md:px-5 max-md:max-w-full">
          <div className="flex gap-1.5 justify-center items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c9bb1dc569ba7d74d5a102c73df15da7a3fb224b23fa3c0bef49daf24055f19?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <button className="self-stretch my-auto">Add more questions</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-9 max-w-full text-lg font-semibold text-neutral-100 w-[163px]">
        <div className="flex flex-col w-full rounded">
          <button className="px-9 py-3.5 bg-orange-500 rounded max-md:px-5">
            Add Asset
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;

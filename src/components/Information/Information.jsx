import RedDot from "../../assets/RedDot.svg";
const InformationItem = ({ label, value }) => (
  <div className="flex flex-col items-center self-stretch my-auto">
    <div className="text-sm font-medium tracking-tight text-neutral-500">{label}</div>
    <div className="mt-4 text-xl font-semibold text-neutral-100">{value}</div>
  </div>
);

const Divider = () => (
  <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-700 h-[89px]" />
);

const Information = ({ productInfo }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-3.5 rounded-xl border-2 border-solid shadow-sm bg-neutral-900 border-neutral-700 border-opacity-50 max-md:px-5">
      <div className="flex flex-wrap gap-7 items-center max-md:max-w-full">
        <InformationItem label="Catalog" value={productInfo.catalog} />
        <Divider />
        <InformationItem label="Sub Catalog" value={productInfo.subCatalog} />
        <Divider />
        <InformationItem label="Brand Name" value={productInfo.brandName} />
        <Divider />
        <InformationItem label="Model No" value={productInfo.modelNo} />
        <Divider />
        <InformationItem label="Device category" value={productInfo.deviceCategory} />
        <Divider />
        <InformationItem label="Manufacturer" value={productInfo.manufacturer} />
        <Divider />
        <div className="flex flex-col items-center self-stretch my-auto">
          <div className="text-sm font-semibold text-neutral-500">Manufactured In</div>
          <div className="flex gap-3 items-center mt-4 text-xl tracking-tight whitespace-nowrap text-neutral-100">
            <img
              src={RedDot}
              alt={`${productInfo.manufacturedIn} flag`}
              className="object-contain w-4 rounded-3xl aspect-square"
            />
            <div>{productInfo.manufacturedIn}</div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col self-stretch my-auto w-[172px]">
          <div className="flex flex-col items-center">
            <div className="max-w-full text-xs font-medium tracking-normal text-neutral-500 w-[132px]">
              Product ata capability
            </div>
            <div className="flex flex-col items-center mt-2.5 max-w-full w-[172px]">
              <div className="flex flex-col w-full rounded-[98px] bg-neutral-700">
                <div 
                  className="flex shrink-0 h-2 bg-orange-500 rounded-[98px]" 
                  style={{ width: `${productInfo.productCapability}%` }}
                />
              </div>
              <div className="mt-1.5 text-xl font-semibold text-neutral-100">
                {productInfo.productCapability}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
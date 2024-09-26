type THeading = {
  Heading: string;
  Text?: string;
  center?: string;
};

const Heading = ({ Heading, Text, center }: THeading) => {
  return (
    <div className="flex justify-center">
      <div className="border-b-2  mt-10 mb-10 space-y-3 border-[#5c53fe]">
        <div
          className={`text-[#112] text-${center}  pb-2 animate__animated animate__fadeInDown  uppercase  font-bold text-2xl`}
        >
          <h1 className="">{Heading}</h1>
        </div>
        <div className="mb-5">
          <p className="font-thin mb-5 ">{Text}</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;

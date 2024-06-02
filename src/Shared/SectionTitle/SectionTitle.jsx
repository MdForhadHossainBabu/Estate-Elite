

const SectionTitle = ({heading, subHeading}) => {
 return (
  <div>
   <p className="text-center text-rose-500 font-mono">--- {subHeading} ---</p>
   <h2 className="text-center text-2xl font-bold font-space uppercase">
    {heading}
   </h2>
  </div>
 );
};

export default SectionTitle;
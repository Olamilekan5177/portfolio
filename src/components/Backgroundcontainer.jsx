const Backgroundcontainer = ({ image, children }) => {
  return (
    <div
      className="relative w-full min-h-fit bg-cover bg-center pt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Backgroundcontainer;

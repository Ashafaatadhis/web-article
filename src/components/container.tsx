const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1024px] px-6  mx-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Container;

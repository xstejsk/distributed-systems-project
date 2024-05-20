import ThemeIcon from "./ThemeIcon";
type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl md:text-5xl">{name}</h1>
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;

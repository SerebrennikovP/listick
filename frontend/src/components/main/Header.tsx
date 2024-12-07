import { useListContext } from "../../context/ListContext";
import BackIcon from "../../svg/BackIcon";
import LogoTransparent from "../../svg/LogoTransparent";

function Header({ className }: { className: string }) {
  const { activeListId, setActiveListId } = useListContext();
  return (
    <div
      className={`${className} grid grid-cols-[60px_auto_60px] fixed w-full h-14 left-0 shadow bg-[#fdfeff]`}
    >
      {!!activeListId ? (
        <BackIcon
          onClick={() => setActiveListId(null)}
          className="h-full m-auto w-auto p-[18px] cursor-pointer"
        />
      ) : (
        <span />
      )}
      <LogoTransparent className="m-auto h-full p-3" />
    </div>
  );
}

export default Header;

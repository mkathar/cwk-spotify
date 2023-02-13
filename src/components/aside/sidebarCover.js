import { useSelector, useDispatch } from "react-redux";
import { Icon } from "../../icons";
import { setSidebar } from "../../stores/player";
function SidebarCover() {
  const current = useSelector((state) => state.player.current);
  const dispatch = useDispatch();
  return (
    <div className="pt-[100%] relative bg-black">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />
      <button
        onClick={() => {
          dispatch(setSidebar(false));
        }}
        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 rotate-180 hover:!opacity-100 hover:scale-[1.06] flex items-center justify-center rounded-full absolute top-1 right-1"
      >
        <Icon name="ArrowLeft" size={16} />
      </button>
    </div>
  );
}

export default SidebarCover;

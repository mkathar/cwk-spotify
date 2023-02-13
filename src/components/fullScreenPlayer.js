import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "../icons";
import { CustomRange } from "./customRange";
import { secondsToTime } from "../utils";

function FullScreenPlayer({ toggle, state, controls, volumeIcon }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div
      className="h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      <div className="absolute left-8 bottom-36 flex items-center gap-x-5">
        <img src={current.image} alt="" className="w-26 h-24 object-cover" />
        <div>
          <h3 className="text-3xl font-semibold">{current.title}</h3>
          <h3 className="text-base font-semibold opacity-50">
            {current.artist}
          </h3>
        </div>
      </div>

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full absolute bottom-4 flex px-8 flex-col items-center"
      >
        <div className="w-full flex items-center mb-2 gap-x-2">
          <div
            className="text-[0.688rem]
          text-white text-opacity-70"
          >
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div
            className="text-[0.688rem]
          text-white text-opacity-70"
          >
            {secondsToTime(state?.duration)}
          </div>
        </div>

        <div className="flex items-center gap-x-5 ">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerShuffel" size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={24} />
          </button>
          <button
            onClick={() => controls[state?.playing ? "pause" : "play"]}
            className="w-16 h-16 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]"
          >
            <Icon name={state?.playing ? "pause" : "play"} size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerLoop" size={24} />
          </button>
        </div>
        <div className="flex items-center absolute bottom-4 right-7 gap-x-3">
          <button
            onClick={() => controls[state.muted ? "unmute" : "mute"]}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name={volumeIcon} size={16} />
          </button>
          <div className="w-[5.813rem] max-w-full ">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          <button
            onClick={() => toggle()}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name="FullScreenOff" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayer;

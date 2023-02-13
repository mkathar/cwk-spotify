import React from "react";
import { Icon } from "../../icons";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { CustomRange } from "../customRange";
import { secondsToTime } from "../../utils";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setControls, setPlaying, setSidebar } from "../../stores/player";
import { useDispatch } from "react-redux";
import FullScreenPlayer from "../fullScreenPlayer";
export default function Player() {
  const fsRef = useRef();
  const [show, toggle] = useToggle(false);
  const isFullScreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  useEffect(() => {
    controls.play();
  }, [current]);
  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "playerMuted";
    }
    if (state.volume > 0 && state.volume < 0.33) {
      return "playerVolumeLow";
    }
    if (state.volume >= 0 && state.volume < 0.66) {
      return "playerVolumeNormal";
    }
    return "playerVolumeFull";
  }, [state.volume, state.muted]);
  return (
    <div className="px-4 flex justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] ">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3 ">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 relative group flex-shrink-0 ">
                  <img src={current.image} alt="" />
                  <button
                    onClick={() => {
                      dispatch(setSidebar(true));
                    }}
                    className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] flex items-center justify-center rounded-full absolute top-1 right-1"
                  >
                    <Icon name="ArrowLeft" size={16} />
                  </button>
                </div>
              )}

              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="playerHeart" size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="playerPictureInPicture" size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] pt-2 flex px-4 flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerShuffel" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={16} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]"
          >
            <Icon name={state?.playing ? "pause" : "play"} size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerLoop" size={16} />
          </button>
        </div>
        <div className="w-full flex items-center mt-2 gap-x-2">
          {audio}
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
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="playerLyrics" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="playerQuenue" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="playerDevice" size={16} />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
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
          <Icon name="playerFullScreen" size={16} />
        </button>
      </div>
      {
        <div ref={fsRef}>
          {isFullScreen && (
            <FullScreenPlayer
              toggle={toggle}
              state={state}
              controls={controls}
              volumeIcon={volumeIcon}
            />
          )}
        </div>
      }
    </div>
  );
}

import categories from "../data/categories";
import Title from "../title";
import favoriteCategories from "../data/favorite-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import { useRef, useState, useEffect } from "react";
import { Icon } from "../../icons";
import Category from "../categoryItem";
import WideCategory from "../wideCategoryItem";

function Search() {
  const favoriteRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoriteRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoriteRef.current.scrollLeft + favoriteRef.current.offsetWidth ==
          favoriteRef.current.scrollWidth;
        const isBegin = favoriteRef.current.scrollLeft == 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };
      favoriteRef.current.addEventListener("scroll", scrollHandle);
    }
  }, [favoriteRef]);

  const slideFavoritesNext = () => {
    favoriteRef.current.scrollLeft += favoriteRef.current.offsetWidth - 200;
  };
  const slideFavoritesPrev = () => {
    favoriteRef.current.scrollLeft -= favoriteRef.current.offsetWidth - 200;
  };
  return (
    <>
      <section className="mb-8">
        <Title title="En çok dinlediğin türler" />

        <div className="relative">
          {prev && (
            <button
              onClick={slideFavoritesPrev}
              className="h-12 w-12 rounded-full absolute hover:scale-[1.06] -left-6 z-10 top-1/2 -translate-y-1/2 bg-white flex items-center justify-center text-black "
            >
              <Icon size={24} name="prev" />
            </button>
          )}
          {next && (
            <button
              onClick={slideFavoritesNext}
              className="h-12 w-12 rounded-full absolute hover:scale-[1.06]  -right-6 z-10 top-1/2 -translate-y-1/2 bg-white flex items-center justify-center text-black "
            >
              <Icon size={24} name="next" />
            </button>
          )}
          <ScrollContainer
            innerRef={favoriteRef}
            className=" flex overflow-x gap-x-6 scrollable"
          >
            {favoriteCategories.map((category, index) => (
              <WideCategory key={index} category={category} />
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Search;

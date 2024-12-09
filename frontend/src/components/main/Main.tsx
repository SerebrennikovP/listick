import { useState } from "react";
import SignIn from "../../components/main/SignIn";
import CollectionList from "../../components/CollectionList";
import Header from "../../components/main/Header";
import "../../index.css";
import { useListContext } from "../../context/ListContext";

function Main() {
  const { backgroundColor } = useListContext();

  const [signedIn, setSignedIn] = useState(true);
  const [swipeDirection, setSwipeDirection] = useState<'up' | 'down' | null>(null);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0].clientY;
    setTouchStart(touchStart);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > 10) {
      if (swipeDistance > 0) {
        setSwipeDirection('up');
      } else {
        setSwipeDirection('down');
      }
    }
  };

  return (
    <div
      style={{ backgroundColor }}
      className={`p-8 transition-all duration-300 min-h-[100dvh] ${swipeDirection === 'up' ? "pt-4" : "pt-[4rem]"}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header
        className={`${swipeDirection === 'up' ? "top-[-3.5rem]" : "top-0"} transition-all z-50 duration-300`}
      />
      {signedIn ? <CollectionList /> : <SignIn />}
    </div>
  );
}

export default Main;

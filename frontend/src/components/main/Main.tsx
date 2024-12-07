import { useState, useEffect } from "react";
import SignIn from "../../components/main/SignIn";
import CollectionList from "../../components/CollectionList";
import Header from "../../components/main/Header";
import "../../index.css";
import { useListContext } from "../../context/ListContext";

function Main() {
  const { backgroundColor } = useListContext();

  const [signedIn, setSignedIn] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div
      style={{ backgroundColor }}
      className={`p-8 transition-all duration-300 min-h-[100dvh] ${
        scrolling ? "pt-4" : "pt-[4rem]"
      }`}
    >
      <Header
        className={`${
          scrolling ? "top-[-3.5rem]" : "top-0"
        } transition-all z-50 duration-300`}
      />
      {signedIn ? <CollectionList /> : <SignIn />}
    </div>
  );
}

export default Main;

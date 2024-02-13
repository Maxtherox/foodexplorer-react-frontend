import React, { useRef, useEffect, useState } from 'react';
import { Container, Content, LeftArrow, RightArrow, Title, Vignette } from "./styles";
import leftarrow from "../../assets/icons/leftarrow.svg";
import rightarrow from "../../assets/icons/rightarrow.svg";

export function Section({ title, children }) {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 315; // ajuste o valor conforme necessário
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 315; // ajuste o valor conforme necessário
    }
  };

  const handleScroll = () => {
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    setIsScrolling(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("scrollend", handleScrollEnd);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    <Container>
      <Vignette className={isScrolling ? 'scrollable' : ''} />
      <Title>{title}</Title>
      <Content ref={containerRef}>
        {children}
      </Content>
      <LeftArrow className={`leftarrow ${isScrolling ? 'scrolling' : ''}`} onClick={scrollLeft}><img src={leftarrow} alt="" /></LeftArrow>
      <RightArrow className={`rightarrow ${isScrolling ? 'scrolling' : ''}`} onClick={scrollRight}><img src={rightarrow} alt="" /></RightArrow>
    </Container>
  );
}

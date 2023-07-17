import styled from "styled-components";

export const PosterBackground = styled.img`
  width: 20%;
  box-sizing: border-box;
  display: inline-block;
  padding: 0 .2vw;
  position: relative;
  vertical-align: top;
  white-space: normal;
  z-index: 1;
`;

export const Card = styled.div`
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: auto;
  padding: 10px;
  text-shadow: 0 1px 1px rgba(#141414, 0.6);
  opacity: 0;
`;

export const Title = styled.h3`
  display: block;
  width: 100%;
  font-size: .7vw;
  font-weight: 600;
  margin-bottom: .3vw;
`;

export const Info = styled.div`
  display: block;
  width: 100%;
  margin-bottom: .3vw;
  font-size: 0;
`;

export const Match = styled.span`
  display: inline-block;
  width: auto;
  font-size: .5vw;
  font-weight: 600;
  margin-right: .4vw;
  color: #46D369;
`;

export const Age = styled.span`
  display: inline-block;
  position: relative;
  width: auto;
  font-size: .5vw;
  padding: 0 0.4em;
  margin-right: .4vw;
  border: solid 1px rgba(#fff, 0.4);
`;

export const Time = styled.span`
  display: inline-block;
  width: auto;
  font-size: .5vw;
`;

export const Tags = styled.div`
  display: block;
  width: 100%;
`;

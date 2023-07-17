import styled from 'styled-components';

export const RowContainer = styled.div`
  margin: 3vw 0;
  padding: 0;
  position: relative;
  transition: transform .54s cubic-bezier(.5, 0, .1, 1) 0s;
  z-index: 1;
`;

export const Title = styled.h2`
  line-height: 1.3;
  font-weight: 500;
  color: #ffffff;
  display: block;
  font-size: 1.5em;
`;

export const Slider = styled.div`
  margin: 0;
  padding: 0 4%;
  position: relative;
  touch-action: pan-y;
  z-index: 2;
`;

export const RowPosters = styled.div`
  overflow-x: visible;
  padding-bottom: 1px;
  white-space: nowrap;
  //display: flex;
  //overflow-y: hidden;
  //overflow-x: scroll;
  //padding: 1vw 1vw 1vw 0;
  //
  //&::-webkit-scrollbar {
  //  display: none;
  //}
`;

export const TitleLink = styled.a`
  color: #e5e5e5;
  display: inline-block;
  font-size: 1.4vw;
  font-weight: 500;
  margin: 0 4% .5em;
  min-width: 6em;
  text-decoration: none;
  cursor: pointer;
`;

export const ExploreFade = styled.div`
  display: table-cell;
  vertical-align: bottom;
`;

export const SeeAllLink = styled.div`
  color: #54b9c5;
  cursor: pointer;
  display: inline-block;
  font-size: .9vw;
  line-height: .8vw;
  margin-right: 4px;
  max-width: 0;
  opacity: 0;
  transition: max-width 1s, opacity 1s, transform .75s;
  vertical-align: bottom;
  white-space: nowrap;
`;
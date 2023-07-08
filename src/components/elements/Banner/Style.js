import styled from 'styled-components';

export const BannerDiv = styled.div`
  position: relative;
  height: 100vh;
  color: white;
  object-fit: contain;
  z-index: 1;
`;

export const BannerContents = styled.div`
  bottom: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 4%;
  position: absolute;
  top: 0;
  width: 36%;
  z-index: 10;
`;

export const BannerLogoText = styled.div`
  width: 100%;
`;

export const BannerTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  width: 45rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const BannerSynopsis = styled.p`
  color: #fff;
  font-size: 1.2vw;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.1vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  width: 100%;
`;

export const BannerFadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56vh;
  background-image: linear-gradient(180deg,
  transparent,
  rgba(37, 37, 37, 0.61),
  #141414);
`;

export const BannerButtons = styled.div`
  display: flex;
  line-height: 88%;
  margin-top: 1.5vw;
  white-space: nowrap;
`;

export const BannerButton = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 0.8rem 2.4rem 0.8rem 2rem;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &.play {
    background-color: white;
    color: black;

    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
      transition: all 0.2s;
    }
  }

  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;

    &:hover {
      background-color: rgba(82, 82, 86, 0.8);
      transition: all 0.2s;
    }
  }
`;

export const BannerButtonSpan = styled.span`
  margin-left: 1rem;
  -webkit-font-smoothing: antialiased;
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const BannerEmbedded = styled.div`
  align-items: center;
  bottom: 35%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  right: 0;
`;

export const ActionButton = styled.span`
  height: 2.4vw;
  margin: 0 1.1vw 0 0;
  position: relative;
  width: 2.4vw;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: 1.35rem;
`;


export const MaturityRating = styled.span`
  align-items: center;
  background-color: rgba(51, 51, 51, .6);
  border: 3px #dcdcdc;
  border-left-style: solid;
  box-sizing: border-box;
  display: flex;
  font-size: 1.1vw;
  height: 2.4vw;
  padding: .5vw 3.5vw .5vw .8vw;
`;

export const MaturityNumber = styled.span`
  overflow: hidden;
  padding: 0 .4em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  unicode-bidi: normal;
  white-space: nowrap;
`;
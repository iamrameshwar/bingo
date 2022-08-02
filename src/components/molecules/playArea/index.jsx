import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tile from "../../atoms/tile";
import { useDispatch, useSelector } from "react-redux";
import { deSelectCard, selectCard, setBingo } from "../../../redux/appSlice";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Lottie from "react-lottie";
import bingoLottie from "../../../assets/lotties/bingoLottie.json";
import fullBingoLottie from "../../../assets/lotties/fullBingoLottie.json";

const StyledPaper = styled(Paper)({
  zIndex: 1,
  width: "100%",
  height: "100%",
  backgroundColor: "#cbcbcb",
});

const StyledTypography = styled(Typography)({
  paddingTop: "25%",
  textAlign: "center",
});
export const PlayArea = () => {
  const { cards, selectedCards, bingos } = useSelector((state) => state.app);
  const [lottieOption, setLottieOption] = React.useState({});
  const [isStopped, setIsStopped] = React.useState(true);
  const dispatch = useDispatch();

  const onCardClick = (card) => {
    selectedCards.indexOf(card) !== -1
      ? dispatch(deSelectCard(card))
      : dispatch(selectCard(card));
  };

  React.useEffect(() => {
    if (bingos.length > 0) {
      let bingoType = "Bingo";
      let defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: bingoLottie,
      };
      if (bingos.length === 12) {
        bingoType = "Full Bingo";
        defaultOptions.animationData = fullBingoLottie;
        defaultOptions.loop = true;
      }
      setLottieOption(defaultOptions);
      setIsStopped(false);
      dispatch(setBingo(bingoType));
    } else {
      setIsStopped(true);
    }
  }, [bingos]);

  return (
    <>
      {!isStopped && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            width: "-webkit-fill-available",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <Lottie
            options={lottieOption}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => {
                  bingos.length === 12 ? setIsPaused(true) : setIsStopped(true);
                },
              },
            ]}
            isStopped={isStopped}
          />
        </div>
      )}
      <Grid container sx={{ margin: "20px auto", padding: "10px" }}>
        {cards?.map((item, i) =>
          i === 12 ? (
            <Grid
              item
              sx={{
                height: "auto",
                width: "20%",
                padding: "3px !important",
                position: "relative",
              }}
              key={item}
            >
              <StyledPaper>
                <StyledTypography
                  gutterBottom
                  variant="caption"
                  component="div"
                >
                  BINGO
                </StyledTypography>
              </StyledPaper>
            </Grid>
          ) : (
            <Grid
              item
              sx={{ height: "auto", width: "20%", padding: "3px !important" }}
              key={item}
            >
              <Tile
                cardNumber={i}
                cardText={item}
                isSelected={selectedCards.indexOf(i) !== -1 ? true : false}
                onSelect={onCardClick}
              />
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

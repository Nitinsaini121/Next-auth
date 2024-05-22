"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Grid, Row } from "@mui/material";
import { useRef } from "react";
import Share from "@/components/share/Share";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function HomePage() {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [search, setSearch] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { status } = useSession();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("india");
  const router = useRouter();
  const refff = useRef(null);

  const onSearchClick = (e) => {
    e.preventDefault();
    const searchValue = refff.current;
    const value = searchValue["search"].value;

    setSearchValue(value);
    searchValue["search"].value = "";
  };

  const newsFunction = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchValue}&from=2024-04-651&apiKey=9a9336f0077d4688a847f47edd21c597`
      );
      setData(news.data.articles);
    } catch (error) {
      console.log(error.name);
    }
  };

  useEffect(() => {
    newsFunction();
    if (status !== "authenticated") {
      router.push("/");
    }
  }, [searchValue]);

  const handleClick = (event) => {
    console.log("event", event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // document.addEventListener("DOMContentLoaded", function () {
  //   // When the user scrolls the page, execute myFunction
  //   window.onscroll = function () {
  //     myFunction();
  //   };

  //   // Get the header
  //   var header = document.getElementById("myHeader");

  //   // Get the offset position of the navbar
  //   var sticky = header.offsetTop;

  //   // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  //   function myFunction() {
  //     if (window.pageYOffset > sticky) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   }
  // });
  return (
    <>
      <div className="flex justify-center" id="myHeader">
        <form ref={refff}>
          <input className="inputvalu" type="text" name="search" />
          <button
            className="bg-slate-700-600-600  text-black-100"
            onClick={(e) => onSearchClick(e)}
          >
            search
          </button>
        </form>
      </div>
      <br></br>

      <Box className="w-full">
        <Grid container spacing={2} className="px-5  flex  mb-10">
          <Box
            className="login-form-wrapper border-stone-300 py-5 px-4
        bg-gray backgrougColorWhite
        width-400 flex justify-center flex-row flex-wrap w-full bg-neutral-100 rounded-lg"
          >
            <Grid container>
              {data.map((data, index) => (
                <Grid item md={4} xs={12} className="pt-1 px-2 pb-5">
                  <Box className="forhover">
                    <Card sx={{ maxWidth: 345 }} key={index}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            N
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={data.title?.slice(0, 30)}
                        subheader={data.publishedAt}
                      />
                      <Link target="blank" href={`${data.url}`}>
                        {" "}
                        <CardMedia
                          component="img"
                          height="194"
                          image={data.urlToImage}
                          alt="Paella dish"
                          className="imageheight"
                        />
                      </Link>
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {data.description?.slice(0, 100)}...
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <Share
                            anchorEl={anchorEl}
                            handleClick={handleClick}
                            handleClose={handleClose}
                          />
                        </IconButton>
                        <ExpandMore
                          key={index}
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>
                            source: {data.source.name}
                          </Typography>
                          <Link href={data.url?.slice(0, 30)}>
                            {" "}
                            <Typography className="text-blue-700" paragraph>
                              Read more : {data.url?.slice(0, 30)}
                            </Typography>
                          </Link>
                          <Typography paragraph>
                            {data.content?.slice(0, 50)}
                          </Typography>

                          <Typography>
                            Set aside off of the heat to let rest for 10
                            minutes, and then serve.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;

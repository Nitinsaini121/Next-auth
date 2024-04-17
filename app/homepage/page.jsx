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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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

  const [search, setSearch] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { status } = useSession();
  const [data, setData] = useState([]);
  const router = useRouter();

  const newsFunction = async () => {
    try {
      const news = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-03-16&apiKey=9a9336f0077d4688a847f47edd21c597"
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
  }, [status, search]);
  return (
    <div className="items-center">
      <div>
        <input
          style={{ border: "2px solid gray" }}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        {"     "}
        <button className="bg-slate-700-600-600  text-black-100">search</button>
      </div>
      <br></br>

      {data.map((data) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                N
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.title}
            subheader={data.publishedAt}
          />
          <CardMedia
            component="img"
            height="194"
            image={data.urlToImage}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
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
              <Typography paragraph>source: {data.source.name}</Typography>
              <Link href={data.url}>
                {" "}
                <Typography className="text-blue-700" paragraph>
                  Read more : {data.url}
                </Typography>
              </Link>
              <Typography paragraph>{data.content}</Typography>

              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

export default HomePage;

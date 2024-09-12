import { ImageComponent } from "../components/atoms/Image";
import NavBar from "../components/molecules/NavBar";
import BannerImage from "../assets/pexels-fauxels-3183150.jpg"
import CardComponent from "../components/atoms/Card";
import { Box } from "@mui/material";


export default function LandingPage() {
    return (
        <Box>
            <NavBar />
            <ImageComponent url={BannerImage} width={"100%"} height={"80%"} />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                <CardComponent image="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" title="card-one" />
                <CardComponent image="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" title="card-one" />
                <CardComponent image="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" title="card-one" />


            </Box>
        </Box>
    )
}
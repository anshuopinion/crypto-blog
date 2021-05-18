import { Container, Grid, GridItem, Heading } from "@chakra-ui/layout";
import PostCard from "./PostCard";
import { blogData } from "../../data";
const RecentPosts = () => {
  return (
    <Container maxW="1300px">
      <Heading m="8" fontSize="2xl">
        Recent Post..
      </Heading>
      <Grid
        gridGap="4"
        gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))"
      >
        {blogData.map((post) => (
          <GridItem key={post.title} display="flex" justifyContent="center">
            <PostCard post={post} />
          </GridItem>
        ))}
      </Grid>
      <Heading my="8" textAlign="center" fontSize="2xl">
        Read more..
      </Heading>
    </Container>
  );
};

export default RecentPosts;

import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

const PostCard = ({ post }) => {
  return (
    <Stack w="20rem" boxShadow="lg" borderRadius="lg">
      <Image src={post.imageUrl} />
      <Stack p="4">
        <Heading my="4" fontSize="lg">
          {post.title}
        </Heading>
        <Flex align="center" my="4">
          <Avatar mr="2" size="sm" src={post.avatar} />
          <Heading mr="2" fontSize="md">
            {post.authorName}
          </Heading>
          <Text>{post.publishDate}</Text>
        </Flex>
        <Text>{post.description}</Text>
        <Flex>
          {post.tags.map((tag, i) => (
            <Tag m="1" key={i}>
              {tag}
            </Tag>
          ))}
        </Flex>
        <Button alignSelf="flex-end" colorScheme="orange">
          Read more
        </Button>
      </Stack>
    </Stack>
  );
};

export default PostCard;

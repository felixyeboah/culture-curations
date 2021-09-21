import Icon from "@chakra-ui/icon";
import { Flex, Link, Text } from "@chakra-ui/layout";
import Layout from "container/Layout";
import {
  FaFacebookSquare,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { SiApplemusic, SiAudiomack } from "react-icons/si";
import HomeSlider from "../components/Slider";
import { useQuery } from "react-query";
import useAPI from "../context/apiContext";

export default function Home() {
  const { getSlides } = useAPI();
  const { data, loading } = useQuery("slides", () => getSlides());

  return (
    <Layout title="Home">
      <HomeSlider slides={data} loading={loading} />
      <Flex
        direction="column"
        align="center"
        pos="absolute"
        bottom={5}
        zIndex={20}
        color="white"
        d={{ base: "flex", sm: "none" }}
      >
        <Flex align="center" mb={2}>
          <Link pr={2}>
            <Icon as={FaFacebookSquare} boxSize={6} />
          </Link>

          <Link
            href="https://instagram.com/culturecurations"
            isExternal
            _hover={{ textDecor: "none" }}
            px={2}
          >
            <Icon as={FaInstagram} boxSize={6} />
          </Link>

          <Link px={2}>
            <Icon as={FaSnapchatGhost} boxSize={6} />
          </Link>

          <Link px={2}>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>

          <Link px={2}>
            <Icon as={FaYoutube} boxSize={7} />
          </Link>

          <Link px={2}>
            <Icon as={SiAudiomack} boxSize={7} />
          </Link>

          <Link px={2}>
            <Icon as={SiApplemusic} boxSize={7} />
          </Link>

          <Link pl={2}>
            <Icon as={FaSpotify} boxSize={7} />
          </Link>
        </Flex>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          textAlign="center"
          fontWeight="light"
        >
          &copy; Copyright {new Date().getFullYear()}. Culture Curations. All
          rights reserved.
        </Text>
      </Flex>
    </Layout>
  );
}

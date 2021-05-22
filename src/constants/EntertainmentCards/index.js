import music from "assets/animations/music";
import podcast from "assets/animations/podcast";

const entertainmentCards = [
  {
    type: "Radio",
    description:
      "It's amazing to have choices when it comes to listen radio, we have more than 5000 channels available with all kind music genre.",
    link: "/radio",
    animationData: music,
  },
  {
    type: "Podcast",
    description:
      "Getting bored or wanna be update with all the information of your choices, Here are the best podcasts out there on the planet.",
    link: "/podcast",
    animationData: podcast,
  },
];

export { entertainmentCards };

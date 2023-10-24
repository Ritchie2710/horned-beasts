import HornBeasts from "./HornBeasts";

export default function Gallery() {
  return (
    <>
      <h2>Horn Beasts</h2>
      <HornBeasts
        title="Rhino"
        imageUrl="https://c02.purpledshub.com/uploads/sites/62/2014/09/Black-rhino-calf-GettyImages-164158552-eea7319-scaled.jpg"
        description="A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae; it can also refer to a member of any of the extinct species of the superfamily Rhinocerotoidea."
      />

      <HornBeasts
        title="Bison"
        imageUrl="https://eu-images.contentstack.com/v3/assets/blt4175b16074920322/blt6aeffbd6b66cbc85/6485f13425a7d7a1bacb83d0/TAMU_20Vet_20Med_20bison1_0.jpeg"
        description="A bison is a large bovine in the genus Bison within the tribe Bovini. Two extant and numerous extinct species are recognised. Of the two surviving species, the American bison, B. bison, found only in North America, is the more numerous.."
      />
    </>
  );
}

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Grilling Accessories",
      imageUrl: "https://i.ibb.co/R91qwZv/grill.jpg",
    },
    {
      id: 2,
      title: "Drinkware",
      imageUrl: "https://i.ibb.co/Dfy1bRF/drinkware.jpg",
    },
    {
      id: 3,
      title: "Tier Tray",
      imageUrl: "https://i.ibb.co/xq3V90F/tier-tray.jpg",
    },
    {
      id: 4,
      title: "3D Flower Art",
      imageUrl: "https://i.ibb.co/ScthdWG/3d-art.jpg",
    },
    {
      id: 5,
      title: "Keychains",
      imageUrl: "https://i.ibb.co/64MvsHs/keychains.jpg",
    },
  ];
  return <Directory categories={categories} />;
};

export default Home
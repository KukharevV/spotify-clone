import Link from "next/link";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistPlay,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    route: "/",
    icon: MdHome,
  },
  {
    name: "Search",
    route: "/search",
    icon: MdSearch,
  },
  {
    name: "Your library",
    route: "/library",
    icon: MdLibraryMusic,
  },
];

const playlistMenu = [
  {
    name: "Create playlist",
    route: "/",
    icon: MdPlaylistPlay,
  },
  {
    name: "Favorites",
    route: "/favorites",
    icon: MdFavorite,
  },
];

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <div className="text-gray-400 p-4 h-full flex flex-col">
      <div className="mb-5">This is Sidebar Logo!</div>
      <nav>
        <ul>
          {navMenu.map((navItem) => {
            return (
              <li>
                <Link href={navItem.route} passHref>
                  <div className="flex items-center hover:text-white mb-5">
                    <navItem.icon size={32} className="mr-2" />
                    <button type="button" className="text-sm">
                      {navItem.name}
                    </button>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr className="mb-5 border-gray-800" />
      <ul>
        {playlistMenu.map((navItem) => {
          return (
            <li>
              <Link href={navItem.route} passHref>
                <div className="flex items-center hover:text-white mb-5">
                  <navItem.icon size={32} className="mr-2" />
                  <button type="button" className="text-sm">
                    {navItem.name}
                  </button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="overflow-scroll">
        {playlist.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

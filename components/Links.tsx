import Link from "next/link";
import { useRouter } from "next/router";
import {
  House,
  DeviceMobileSpeaker,
  Palette,
  TextAa,
  GameController,
  BezierCurve,
  PaintBrush,
  Camera,
  ImageSquare,
  Lightbulb,
  Smiley,
  ThumbsUp,
  Wrench,
} from "phosphor-react";

const navLinks = [
  {
    name: "Design",
    items: [
      { title: "Icons", path: "/design/icons", icon: Smiley },
      {
        title: "Illustrations",
        path: "/design/illustrations",
        icon: ImageSquare,
      },
      { title: "Stock Photos", path: "/design/stock-photos", icon: Camera },
      { title: "Colors", path: "/design/colors", icon: Palette },
      { title: "Inspiration", path: "/design/inspiration", icon: Lightbulb },
      {
        title: "UI Components",
        path: "/design/ui-components",
        icon: DeviceMobileSpeaker,
      },
      { title: "Typography", path: "/design/fonts", icon: TextAa },
      { title: "Tools", path: "/design/tools", icon: Wrench },
      {
        title: "Best Practices",
        path: "/design/best-practices",
        icon: ThumbsUp,
      },
      { title: "Design Systems", path: "/design/systems", icon: BezierCurve },
      { title: "AI Art", path: "/design/ai-art", icon: PaintBrush },
      { title: "Games", path: "/design/games", icon: GameController },
    ],
  },
];

interface ChildProps {
  toggleMenu: Function;
}

const Links = (props: ChildProps) => {
  const router = useRouter();

  return (
    <ul className="list-none px-0">
      <li className="my-4" key="home">
        <Link
          key="home"
          onClick={() => props.toggleMenu()}
          href="/"
          passHref
          className={
            "text-white text-sm flex p-3 rounded-lg " +
            (router.asPath === "/" ? "bg-gray-900" : "hover:bg-gray-700")
          }
        >
          <House color="white" size="20" className="mr-2" /> Home
        </Link>
      </li>
      {navLinks.map((bucket) => {
        return (
          <li key={bucket.name}>
            <ul className="list-none px-0">
              {bucket.items.map((link) => {
                return (
                  <li className="mb-1" key={link.title}>
                    <Link
                      key={link.title}
                      onClick={() => props.toggleMenu()}
                      href={link.path}
                      passHref
                      className={
                        "text-white whitespace-nowrap text-sm flex p-3 rounded-lg " +
                        (router.asPath === link.path
                          ? "bg-gray-900"
                          : "hover:bg-gray-700")
                      }
                    >
                      <link.icon color="white" size="20" className="mr-2" />{" "}
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;

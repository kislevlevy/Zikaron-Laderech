import styles from "./style.module.scss";

const pastelColors = [
  "#FFF8F8", // Very Light Pink
  "#FEEDED", // Soft Peach
  "#FFFAFA", // Almost White Pink
  "#FEEBEB", // Muted Blush
  "#F2FFF0", // Pale Mint Green
  "#ECFAE2", // Soft Pastel Green
  "#EAF7FF", // Light Ice Blue
  "#F6F1FF", // Gentle Lavender
  "#FFF9E6", // Creamy Light Yellow
];


const colorGenrator = (color, percent, type = "light") => {
  const factor = type === "light" ? [1, 1] : [-1, 0];
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + factor[0] * amt;
  const G = ((num >> 8) & 0x00ff) + factor[0] * amt;
  const B = (num & 0x0000ff) + factor[0] * amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < factor[1] ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < factor[1] ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < factor[1] ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

export default function DynamicBackground({ children, rand, className = "" }) {
  const randomColor = pastelColors[Math.floor(rand * pastelColors.length)];
  const lighterColor = colorGenrator(randomColor, 50, "light");
  const darkerBorderColor = colorGenrator(randomColor, 10, "dark");

  return (
    <div
      className={`${styles.dynamicBackground} ${className}`}
      style={{
        "--baseColor": randomColor,
        "--lighterColor": lighterColor,
        "--borderColor": randomColor,
        "--darkerBorderColor": darkerBorderColor,
      }}
    >
      {children}
    </div>
  );
}

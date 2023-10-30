export default function HeroText() {
  const style = {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  };

  return (
    <div 
      className="min-h-[525px] bg-brand-blue"
      style={style}
    >
      HERO TEXT GOES HERE
    </div>
  );
}

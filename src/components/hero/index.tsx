import heroImage from '../../assets/images/hero.jpeg';

export default function Hero() {
  const style = {
    backgroundImage: `url("${heroImage}")`,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 7vw)",
  };

  return (
    <div 
      className="bg-cover bg-center min-h-[535px]" 
      style={style}
    />
  );
}

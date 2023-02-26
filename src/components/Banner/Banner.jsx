function Banner({ title,bannerImg }) {
  const bannerImageUrl = bannerImg;
  return (
    <div
      className="h-28 rounded-2xl bg-gray-200 overflow-hidden flex justify-center items-center brightness-90 bg-no-repeat bg-center bg-cover sm:h-56"
      style={{ backgroundImage: `url(${bannerImageUrl})` }}
    >
      <h2 className="absolute text-white text-4xl">{title}</h2>
    </div>
  );
}

export default Banner;

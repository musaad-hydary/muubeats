const Radio = () => {
  return (
    <div className="w-full h-screen bg-[#f2f2f2] px-12 py-24">
      <div className="aspect-w-12 aspect-h-6 flex flex-col justify-center items-center w-full h-full">
        <iframe
          width="960"
          height="640"
          src="https://www.youtube.com/embed/1zaAMIWGr94"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Radio;

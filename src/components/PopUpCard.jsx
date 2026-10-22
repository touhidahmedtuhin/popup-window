function PopUpCard({ title, setshow }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-70 h-80 bg-[#008080] rounded">
        <div className="flex justify-between">
          <p></p>
          <button
            className="mr-3 mt-1 cursor-pointer text-white"
            onClick={() => setshow(true)}
          >
            🗙
          </button>
        </div>
        <div className="text-center mt-13 text-white ">
          <h2 className="text-2xl">⚠️ {title}</h2>
          <p className="mt-3">Are you want to {title.toLowerCase()} this ?</p>
        </div>
        <div className="flex gap-10 justify-center mt-15 text-white ">
          <button className="bg-[tomato] px-4 rounded cursor-pointer">
            Yes
          </button>
          <button className="bg-[green] px-4 rounded cursor-pointer">No</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpCard;

function Button({ title ,setshow }) {
  return (
    <>
      <button className="bg-blue-400 text-white px-2 rounded text-center cursor-pointer text-2xl" onClick={()=>setshow(false)}>
        {title}
      </button>
    </>
  );
}

export default Button;

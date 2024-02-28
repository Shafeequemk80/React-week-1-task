import image from './assets/dp.jpg'
function profilePicture() {

  const handleClick = (e) => e.target.style.display = "none";
  return (<img  onClick={(e) => handleClick(e)}  src={image} ></img>);
}
export default profilePicture;

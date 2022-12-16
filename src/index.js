import "./index.css";
const dragItem = document.querySelector(".block__draggable");
const container = document.querySelector(".block");

let initialX,
  initialY,
  xOffset = 0,
  yOffset = 0;

const handleMouseDown = (e) => {
  e.preventDefault();
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  document.addEventListener("pointermove", handleMouseMove);
  document.addEventListener("pointerup", handleMouseUp);
  dragItem.addEventListener("touchmove", handleTouchMove);
};

const handleMouseMove = (e) => {
  e.preventDefault();
  const currentX = e.clientX - initialX;
  const currentY = e.clientY - initialY;
  moveItem(currentX, currentY);
};

function handleTouchMove(e) {
  const currentX = e.changedTouches[0].pageX - initialX;
  const currentY = e.changedTouches[0].pageY - initialY;
  moveItem(currentX, currentY);
}

function moveItem(currentX, currentY) {
  if (currentX > 0 && currentX < container.clientWidth - 100) {
    xOffset = currentX;
    dragItem.style.left = currentX + "px";
  }
  if (currentY > 0 && currentY < container.clientHeight - 100) {
    dragItem.style.top = currentY + "px";
    yOffset = currentY;
  }
}

const handleMouseUp = () => {
  document.removeEventListener("pointerup", handleMouseUp);
  document.removeEventListener("pointermove", handleMouseMove);
};

dragItem.addEventListener("pointerdown", handleMouseDown);

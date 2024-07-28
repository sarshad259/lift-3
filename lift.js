let floor0 =  document.getElementById("floor0");
let floor1 =  document.getElementById("floor1");
let floor2 =  document.getElementById("floor2");
let floor3 =  document.getElementById("floor3");
let lift =  document.getElementById("lift");


let btn0 = document.getElementById("0")
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");

document.getElementById("0").addEventListener("click", () => {
    lift.style.bottom = "105px"
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "none";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
 })
document.getElementById("1").addEventListener("click", () => {
   lift.style.bottom = "245px"
   lift.style.zIndex = "90"
   btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "none";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
})
document.getElementById("2").addEventListener("click", () => {
    lift.style.bottom = "305px";
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "none";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
 })
 document.getElementById("3").addEventListener("click", () => {
    lift.style.bottom = "405px";
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "none";
    btn4.style.pointerEvents = "auto";
 })
 document.getElementById("4").addEventListener("click", () => {
    lift.style.bottom = "505px";
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "none";
 })
 // lift.js
// lift.js

// Helper function to calculate the bottom position based on the floor
function getFloorBottomPosition(floorId) {
    const lift = document.getElementById('lift');
    const liftContainer = document.querySelector('.lift-container');
    const floorHeight = 100; // Height of each floor
    const liftHeight = lift.offsetHeight;
    const floorNumber = parseInt(floorId, 10);
    return (liftContainer.offsetHeight - liftHeight) - (floorHeight * (floorNumber + 1));
}

// Function to move the lift to the specified floor
function moveLiftToFloor(floorId) {
    const lift = document.getElementById('lift');
    const position = getFloorBottomPosition(floorId);
    
    // Close the lift doors
    lift.classList.remove('open');
    
    // Move the lift after the doors are closed
    setTimeout(() => {
        lift.style.bottom = `${position}px`;
        
        // Open the lift doors after the lift has moved
        setTimeout(() => {
            lift.classList.add('open');
        }, 800); // Adjust this timeout to match the lift movement transition duration
    }, 500); // Adjust this timeout to match the door closing transition duration
}

// Event listener for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const floor = button.dataset.floor;
        
        // Disable all buttons and enable the clicked one
        document.querySelectorAll('.btn').forEach(btn => {
            btn.style.pointerEvents = 'auto';
        });
        button.style.pointerEvents = 'none';
        
        // Move the lift to the selected floor
        moveLiftToFloor(floor);
    });
});



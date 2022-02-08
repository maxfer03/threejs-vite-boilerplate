import { World } from "./World/World.js";
import "./styles/style.css";

// Starting threejs

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // // 2. Render the scene
  // world.render();

  // produce a single frame (render on demand)
  // world.render();

  // start the loop (produce a stream of frames)
  world.start();
}







main();

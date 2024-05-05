function generateStory() {
  // Get user input from form fields
  const room = document.getElementById("room").value;
  const profession = document.getElementById("profession").value;
  const object = document.getElementById("object").value;
  const relationship = document.getElementById("relationship").value;
  const soundEffect = document.getElementById("sound_effect").value;
  const suspect = document.getElementById("suspect").value;

  // Create the story template with user input
  const storyTemplate = `
    In the dimly lit ${room}, a commotion erupted, the esteemed ${profession},
    was found sprawled on the floor, ${object} clutched in their hand.
    , the loyal ${relationship}, stumbled upon the scene, shrieking in ${soundEffect}.
    The detective suspected number ${suspect} the most...
  `;

  // Display the completed story
  const completedStoryElement = document.getElementById("completed-story");
  completedStoryElement.textContent = storyTemplate;
}

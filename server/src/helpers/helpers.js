function setDelay_helper(delayEmount, message) {
  let delayCounter = 0;

  console.log("delay start for", message);

  for (let i = 0; i < delayEmount; i++) {
    delayCounter += i;
  }

  console.log("delay end for", message);
}

export { setDelay_helper };

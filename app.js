class LinePrompter {
  constructor() {
    this.message = "What is your message for this line?";
    this.list = [];
  }

  promptForLines() {
    let askAmount = prompt("How many lines did you want?");
    this.count = parseInt(askAmount);
  }

  generateLines() {
    if (this.count) {
      for (let i = 0; i < this.count; i++) {
        let temp = prompt(this.message);
        this.list.push(temp);
        document.write(`<p>${this.list[i]}</p>`);
      }
    } else {
      throw Error(`void, please restart the program`);
    }
  }

  run() {
    this.promptForLines();
    this.generateLines();
  }
}

let prompter = new LinePrompter();
prompter.run();

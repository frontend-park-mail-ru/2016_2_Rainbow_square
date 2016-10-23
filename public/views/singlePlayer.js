import View from "../modules/view"
import Block from "../components/block/block.js";

export  default  class SinglePlayerView extends View {
  constructor(options = {}) {
    super(options);
    this._el = new Block('div');
    this.hide();
  }

  resume(options = {}) {
    if (!options.username && !options.email) {
      return this.router.go('/login');
    }

    this.show();
  }
}




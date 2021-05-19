import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        ToggleContent() {
          this.toggleProperty("isShowContent");
        }
    }
});

LegacyNameOutputController.$inject = [];
function LegacyNameOutputController() {

}

export const LegacyNameOutputComponent = {
  template: `
    <p>Name: <strong id="legacy-username">{{ $ctrl.username }}</strong></p>
  `,
  controller: LegacyNameOutputController,
  bindings: {
    username: '<?'
  },
};

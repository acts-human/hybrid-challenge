LegacyNameOutputController.$inject = [];
function LegacyNameOutputController() {

}

export const LegacyNameOutputComponent = {
  template: `
    <p>Name: <strong>{{ $ctrl.username }}</strong></p>
  `,
  controller: LegacyNameOutputController,
  bindings: {
    username: '<?'
  },
};

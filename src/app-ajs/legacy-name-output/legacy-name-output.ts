LegacyNameOutputController.$inject = [];
function LegacyNameOutputController() {

}

export const LegacyNameOutputComponent = {
  template: `
    <p>First Name: <strong id="legacy-firstname">{{ $ctrl.firstname }}</strong></p>
    <p>Last Name: <strong id="legacy-lastname">{{ $ctrl.lastname }}</strong></p>
  `,
  controller: LegacyNameOutputController,
  bindings: {
    firstname: '<?',
    lastname: '<?'
  },
};

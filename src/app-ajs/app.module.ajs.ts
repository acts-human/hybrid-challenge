import * as angular from 'angular';
import {LegacyNameOutputComponent} from './legacy-name-output/legacy-name-output';

export const LegacyAppModule = angular
  .module('LegacyAppModule', [])
  .component('legacyNameOutputComponent', LegacyNameOutputComponent)
  .name;


import Vue from 'nativescript-vue'
import App from './components/App.vue'
import Test from './components/Test.vue'
import { Label } from 'tns-core-modules/ui/label';
import { isAndroid } from 'tns-core-modules/platform';

new Vue({
  
  render: h => h('frame', [h(Test)])
}).$start()

export function onLabelLoaded(args) {
  const lbl=args.object as Label;
  
    lbl.android.setGravity(17);
  
}
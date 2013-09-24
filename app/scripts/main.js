require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min'
  }
});
 
require(['underscore', 'jquery', 'app','services/print'], function($, _, app, services) {
  // use app here
  $('#print').click(function (){
    services.print('barcode', 'desc', 'name', 'prefix', 'project', 'suffix').done(function(){
      alert('Printed');
    });
  });
  console.log(app);
});


$(document).ready(function() {
   
    $('#example2').DataTable({
      'paging'      : true,
      "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : true,
      destroy: true,
      
    })
  })





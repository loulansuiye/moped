jQuery(document).ready(function($){
$('.demo').ajaxupload({
		url:'wordpress/custom/file_upload.php',
		remotePath:'uploaded/',
		allowExt:['zip', 'xml', 'suite'],
		form:'#upload_application_form'
	});

})(jQuery);
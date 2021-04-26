$(document).ready(function(){

	$('#copybutton').click(function() {
		$('#text-convert').select();
		document.execCommand('Copy');
	});

	$('#clearbutton').click(function() {
		var chr = $('#text-normal').val();
		var head = "s3.console.aws.com/s3/buckets/"
		var url = head.concat(chr.slice(5)).toString()
		$('#text-convert').val(url)
	});
});
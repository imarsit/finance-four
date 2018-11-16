

// inCludeScript('../th/javascripts/jquery.js')
// inCludeScript('../th/javascripts/app.js')
// inCludeScript('../th/javascripts/index.js')
// inCludeScript('../th/javascripts/home.js')
// inCludeScript('../th/javascripts/stat.js')
inCludeScript('../th/javasripts/newyear.js');
inCludeScript('../th/javasripts/jquery.nivo.slider.js');
inCludeScript('../th/javasripts/imme1.js');
inCludeScript('../th/javasripts/counter.js');
inCludeScript('../th/javasripts/countdown.js');













function inCludeScript(url){
	document.write('<script type="text/javascript" "js/' + url + '"> </script>');
	return false;
}
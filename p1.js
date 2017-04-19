function init(){
    	var url='http://india-wris.nrsc.gov.in'; /* replace url value with http://india-wris.nrsc.gov.in */
    	var map=L.map('map',{
    		crs:L.CRS.EPSG4326,//3857,900913,4326
    		center:[21,78],
    		zoom:5,
    		//minZoom:5,
    		//maxZoom:14,
    		layers:[
    			//WMS enabled ArcGIS REST based services through tileLayer/ wms
    			L.tileLayer.wms(url+'/ArcGIS/services/Common/DEM/MapServer/WMSServer',{layers:'1,2,3',version:'1.3.0'}),
    			L.tileLayer.wms(url+'/ArcGIS/services/Common/Outside_India/MapServer/WMSServer',{layers:1,version:'1.3.0',transparent:true,format:'image/png32'}),
    			L.tileLayer.wms(url+'/ArcGIS/services/SubInfoSysLCC/Admin_subinfo_a/MapServer/WMSServer',{layers:'1,2,3,4,5,6,7,8',version:'1.3.0',transparent:true,format:'image/png'}),
    			L.tileLayer.wms(url+'/ArcGIS/services/SubInfoSysLCC/Infra_InfoSystem/MapServer/WMSServer',{layers:'1,2,3,4,5,6',version:'1.3.0',transparent:true,format:'image/png'}),
    		]		
    	});
    };

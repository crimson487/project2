var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSateliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satelite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TKD_tempelan_2 = new ol.format.GeoJSON();
var features_TKD_tempelan_2 = format_TKD_tempelan_2.readFeatures(json_TKD_tempelan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKD_tempelan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKD_tempelan_2.addFeatures(features_TKD_tempelan_2);
var lyr_TKD_tempelan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKD_tempelan_2, 
                style: style_TKD_tempelan_2,
                popuplayertitle: 'TKD_tempelan',
                interactive: true,
    title: 'TKD_tempelan<br />\
    <img src="styles/legend/TKD_tempelan_2_0.png" /> pelungguh<br />\
    <img src="styles/legend/TKD_tempelan_2_1.png" /> Pelungguh<br />\
    <img src="styles/legend/TKD_tempelan_2_2.png" /> Pengarem arem<br />\
    <img src="styles/legend/TKD_tempelan_2_3.png" /> Pengarem-arem<br />\
    <img src="styles/legend/TKD_tempelan_2_4.png" /> Tanah Kas Desa<br />\
    <img src="styles/legend/TKD_tempelan_2_5.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSateliteHybrid_1.setVisible(true);lyr_TKD_tempelan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSateliteHybrid_1,lyr_TKD_tempelan_2];
lyr_TKD_tempelan_2.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Id': 'Id', 'Status_Tan': 'Status_Tan', 'Penguasaan': 'Penguasaan', 'Penggunaan': 'Penggunaan', 'Lokasi': 'Lokasi', 'Luas': 'Luas', 'Pemanfaata': 'Pemanfaata', 'peng1': 'peng1', 'Milik': 'Milik', });
lyr_TKD_tempelan_2.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Id': 'TextEdit', 'Status_Tan': 'TextEdit', 'Penguasaan': 'TextEdit', 'Penggunaan': 'TextEdit', 'Lokasi': 'TextEdit', 'Luas': 'TextEdit', 'Pemanfaata': 'TextEdit', 'peng1': 'TextEdit', 'Milik': 'TextEdit', });
lyr_TKD_tempelan_2.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Id': 'no label', 'Status_Tan': 'inline label - visible with data', 'Penguasaan': 'inline label - visible with data', 'Penggunaan': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Pemanfaata': 'inline label - visible with data', 'peng1': 'inline label - visible with data', 'Milik': 'inline label - visible with data', });
lyr_TKD_tempelan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
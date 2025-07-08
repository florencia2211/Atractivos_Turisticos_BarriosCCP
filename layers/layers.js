ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([670665.385216, 5921115.387161, 679003.967799, 5926328.554663]);
var wms_layers = [];


        var lyr_HereWegoTerrain_0 = new ol.layer.Tile({
            'title': 'Here Wego Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://1.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });
var format_BARRIOS_SELECCIONADOS_1 = new ol.format.GeoJSON();
var features_BARRIOS_SELECCIONADOS_1 = format_BARRIOS_SELECCIONADOS_1.readFeatures(json_BARRIOS_SELECCIONADOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BARRIOS_SELECCIONADOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_SELECCIONADOS_1.addFeatures(features_BARRIOS_SELECCIONADOS_1);
var lyr_BARRIOS_SELECCIONADOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOS_SELECCIONADOS_1, 
                style: style_BARRIOS_SELECCIONADOS_1,
                popuplayertitle: 'BARRIOS_SELECCIONADOS',
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_SELECCIONADOS_1.png" /> BARRIOS_SELECCIONADOS'
            });
var format_AtractivosTuristicos_2 = new ol.format.GeoJSON();
var features_AtractivosTuristicos_2 = format_AtractivosTuristicos_2.readFeatures(json_AtractivosTuristicos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AtractivosTuristicos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtractivosTuristicos_2.addFeatures(features_AtractivosTuristicos_2);
var lyr_AtractivosTuristicos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtractivosTuristicos_2, 
                style: style_AtractivosTuristicos_2,
                popuplayertitle: 'AtractivosTuristicos',
                interactive: true,
    title: 'AtractivosTuristicos<br />\
    <img src="styles/legend/AtractivosTuristicos_2_0.png" /> Casa de Salud<br />\
    <img src="styles/legend/AtractivosTuristicos_2_1.png" /> Cerro Amarrillo<br />\
    <img src="styles/legend/AtractivosTuristicos_2_2.png" /> Estadio Ester Roa Rebolledo<br />\
    <img src="styles/legend/AtractivosTuristicos_2_3.png" /> Humedal Urbano Paicaví-Tucapel Bajo<br />\
    <img src="styles/legend/AtractivosTuristicos_2_4.png" /> Mercado de Talcahuano<br />\
    <img src="styles/legend/AtractivosTuristicos_2_5.png" /> Museo de la Historia de Penco<br />\
    <img src="styles/legend/AtractivosTuristicos_2_6.png" /> Museo de sitio mina chiflón del diablo<br />\
    <img src="styles/legend/AtractivosTuristicos_2_7.png" /> Nonguen Zoo<br />\
    <img src="styles/legend/AtractivosTuristicos_2_8.png" /> Parque Humedal Los Batros<br />\
    <img src="styles/legend/AtractivosTuristicos_2_9.png" /> Parque Las Tres Pascualas<br />\
    <img src="styles/legend/AtractivosTuristicos_2_10.png" /> Picada el Sauce<br />\
    <img src="styles/legend/AtractivosTuristicos_2_11.png" /> Pinacoteca<br />\
    <img src="styles/legend/AtractivosTuristicos_2_12.png" /> Plaza de Armas Arturo Prat Tomé<br />\
    <img src="styles/legend/AtractivosTuristicos_2_13.png" /> Plaza de Armas Coronel<br />\
    <img src="styles/legend/AtractivosTuristicos_2_14.png" /> Plaza de la Independencia de Concepción<br />\
    <img src="styles/legend/AtractivosTuristicos_2_15.png" /> Plaza España<br />\
    <img src="styles/legend/AtractivosTuristicos_2_16.png" /> Plaza Perú<br />\
    <img src="styles/legend/AtractivosTuristicos_2_17.png" /> Strip Center Paseo Altas Cumbres<br />\
    <img src="styles/legend/AtractivosTuristicos_2_18.png" /> Teatro Enrique Molina<br />\
    <img src="styles/legend/AtractivosTuristicos_2_19.png" /> Templo Pedro de Valdivia<br />\
    <img src="styles/legend/AtractivosTuristicos_2_20.png" /> <br />' });

lyr_HereWegoTerrain_0.setVisible(true);lyr_BARRIOS_SELECCIONADOS_1.setVisible(true);lyr_AtractivosTuristicos_2.setVisible(true);
var layersList = [lyr_HereWegoTerrain_0,lyr_BARRIOS_SELECCIONADOS_1,lyr_AtractivosTuristicos_2];
lyr_BARRIOS_SELECCIONADOS_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_AtractivosTuristicos_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'BARRIO': 'BARRIO', 'VIDEO': 'VIDEO', 'InfoSitio': 'InfoSitio', 'Horario': 'Horario', });
lyr_BARRIOS_SELECCIONADOS_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_AtractivosTuristicos_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'BARRIO': 'TextEdit', 'VIDEO': 'TextEdit', 'InfoSitio': 'TextEdit', 'Horario': 'TextEdit', });
lyr_BARRIOS_SELECCIONADOS_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_AtractivosTuristicos_2.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'BARRIO': 'inline label - always visible', 'VIDEO': 'inline label - always visible', 'InfoSitio': 'inline label - always visible', 'Horario': 'inline label - always visible', });
lyr_AtractivosTuristicos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6909],{6909:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Fe});var o=r(67294),n=r.n(o),a=r(57043),i=r.n(a),s=r(91175),c=r.n(s),p=r(13311),l=r.n(p),u=r(12571),d=r.n(u),g=r(57557),f=r.n(g),y=r(1469),m=r.n(y),w=r(10928),C=r.n(w),v=r(63105),S=r.n(v),h=r(14293),G=r.n(h),P=r(84596),F=r.n(P),b=r(45697),I=r.n(b),T=r(27418),O=r.n(T),x=r(55877),M=r.n(x),j=r(9669),E=r.n(j),k=r(52259),L=r(86267),D=r(66287),Z=r(64250),A=r(58767),W=r(93546),R=r(69141),N=r(23068),_=r(97016),J=r(29902),B=r(72445),V=r(52329),q=r(40353),H=r(52043),X=r(44538),z=r(25642),K=r(13987),U=r(69669),$=r(98090),Q=r(31219),Y=r(98185),ee=r(20767),te=r(15565),re=r(9371),oe=r(78426),ne=r(36403),ae=r(18369),ie=r(29194),se=r(1577),ce=r(51273),pe=r(56834),le=r(21915);function ue(e){return ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function de(e){return function(e){if(Array.isArray(e))return ge(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ge(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){Ge(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ce(e,t){return Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ce(e,t)}function ve(e,t){if(t&&("object"===ue(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Se(e)}function Se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},he(e)}function Ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Pe=new R.Z,Fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(s,e);var t,r,o,n,a=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=he(o);if(n){var r=he(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ve(this,e)});function s(){var e;me(this,s);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return Ge(Se(e=a.call.apply(a,[this].concat(r))),"getNewFeature",(function(t,r,o,n){return new N.Z({geometry:e.createOLGeometry({type:t,coordinates:r,radius:o,center:n})})})),Ge(Se(e),"getMapCrs",(function(){return e.props.map.getView().getProjection().getCode()})),Ge(Se(e),"updateFeatureStyles",(function(t){t&&t.length>0&&t.forEach((function(t){if(t.style){var r=e.toOlFeature(t);r&&r.setStyle(t.style?(0,W.C2)(t):e.toOlStyle(t.style,t.selected))}}))})),Ge(Se(e),"updateOnlyFeatureStyles",(function(t){e.drawLayer&&e.drawLayer.getSource().getFeatures().forEach((function(e){var r=c()(t.features).features||t.features,o=l()(r,(function(t){return t.properties.id===e.getProperties().id}));if(o){var n=(0,D.createStylesAsync)(F()(o.style));E().all(n).then((function(t){e.setStyle((function(){return(0,W.Cw)(ye(ye({},o),{},{style:t}))}))}))}}))})),Ge(Se(e),"addLayer",(function(t,r){var o,n=e.convertGeometryTypeToStyleType(t.drawMethod);o=function(e){var r=c()(t.features)&&l()(c()(t.features).features,(function(t){return t.properties.id===e.getProperties().id}))||null;if(r){var o=(0,D.createStylesAsync)(F()(r.style));return E().all(o).then((function(t){e.setStyle((function(){return(0,W.Cw)(ye(ye({},r),{},{style:t}))}))})),null}return(0,W.Cw)({style:W.jF[n]})},e.geojson=new R.Z,e.drawSource=new _.Z,e.drawLayer=new J.Z({source:e.drawSource,zIndex:1e8,style:o}),e.props.map.addLayer(e.drawLayer),r&&e.addInteractions(t);var a=c()(t.features);if(a&&a.features&&a.features.length){var i=a.features.filter((function(e){return!e.properties.isCircle||e.properties.isCircle&&!e.properties.canEdit||!t.options.drawEnabled}));return e.addFeatures(O()({},t,{features:[ye(ye({},a),{},{features:i})]}))}return e.addFeatures(t)})),Ge(Se(e),"addFeatures",(function(t){var r,o=t.features,n=t.drawMethod,a=t.options,i=e.getMapCrs();if(o.forEach((function(t){if("FeatureCollection"===t.type){var o=(new R.Z).readFeatures(t);a.geodesic||(o=o.map((function(e){return(0,Z.a)(e,i)}))),e.drawSource=new _.Z({features:o}),e.drawLayer.setSource(e.drawSource)}else{var s,c=null,p=t;if(p.geometry&&"GeometryCollection"!==p.geometry.type&&(p=(0,L.reprojectGeoJson)(p,p.featureProjection,i).geometry),"GeometryCollection"!==p.type)"Circle"===n&&p&&(p.properties&&p.properties.center||p.center)?(c=[(c=p.properties&&p.properties.center?(0,L.reproject)(p.properties.center,"EPSG:4326",i):p.center).x,c.y],r=new N.Z({geometry:e.createOLGeometry({type:"Circle",center:c,projection:"EPSG:3857",radius:p.properties&&p.properties.radius||p.radius,options:a})})):r=new N.Z({geometry:e.createOLGeometry(p.geometry?p.geometry:ye(ye({},p),{},{radius:null===(s=p.properties)||void 0===s?void 0:s.radius,center:c}))}),r.setProperties(t.properties),e.drawSource.addFeature(r)}})),0===o.length&&(a.editEnabled||a.drawEnabled))a.transformToFeatureCollection?(e.drawSource=new _.Z({features:(new R.Z).readFeatures({type:"FeatureCollection",features:[]})}),e.drawLayer.setSource(e.drawSource)):(r=new N.Z({geometry:e.createOLGeometry({type:n,coordinates:null})}),e.drawSource.addFeature(r));else{if(o[0]&&"GeometryCollection"===o[0].type){e.drawSource=new _.Z({features:(new R.Z).readFeatures(o[0])});var s=e.replacePolygonsWithCircles(e.drawSource.getFeatures()[0]);e.drawSource.getFeatures()[0].getGeometry().setGeometries(s),e.drawLayer.setSource(e.drawSource)}o[0]&&o[0].geometry&&"GeometryCollection"===o[0].geometry.type&&(r=(0,L.reprojectGeoJson)(o[0],a.featureProjection,i).geometry,e.drawSource=new _.Z({features:(new R.Z).readFeatures(r)}),e.drawSource.getFeatures()[0].set("textGeometriesIndexes",o[0].properties&&o[0].properties.textGeometriesIndexes),e.drawSource.getFeatures()[0].set("textValues",o[0].properties&&o[0].properties.textValues),e.drawSource.getFeatures()[0].set("circles",o[0].properties&&o[0].properties.circles),e.drawLayer.setSource(e.drawSource))}return e.updateFeatureStyles(o),r})),Ge(Se(e),"replaceFeatures",(function(t){var r;return e.drawLayer?(e.drawSource.clear(),r=e.addFeatures(t),t.style&&e.drawLayer.setStyle((function(r){var o=l()(c()(t.features).features,(function(e){return e.properties.id===r.getProperties().id}));if(o){var n=(0,D.createStylesAsync)(F()(o.style));return E().all(n).then((function(e){r.setStyle((function(){return(0,W.Cw)(ye(ye({},o),{},{style:e}))}))})),null}var a=e.convertGeometryTypeToStyleType(t.drawMethod);return(0,W.Cw)({style:W.jF[a]})}))):r=e.addLayer(t,t.options&&t.options.drawEnabled||!1),r})),Ge(Se(e),"endDrawing",(function(t){var r=e.replaceFeatures(t);if(r){var o=e.fromOLFeature(r);"Circle"===t.drawMethod&&t&&t.features&&t.features.length&&t.features[0]&&t.features[0].radius>=0&&(o.radius=t.features[0].radius),e.props.onEndDrawing(o,t.drawOwner)}})),Ge(Se(e),"addDrawInteraction",(function(t,r,o,n){e.drawInteraction&&e.removeDrawInteraction(),e.drawInteraction=new B.ZP(e.drawPropertiesForGeometryType(t,o,e.drawSource,n)),e.props.map.disableEventListener("singleclick"),e.drawInteraction.on("drawstart",(function(){e.selectInteraction&&(e.selectInteraction.getFeatures().clear(),e.selectInteraction.setActive(!1))})),e.drawInteraction.on("drawend",(function(t){var o=t.feature.clone();if(o.set("id",M().v1()),"Circle"===e.props.drawMethod&&"Circle"===o.getGeometry().getType()){var n=o.getGeometry().getRadius(),a=o.getGeometry().getCenter();o.setGeometry(e.polygonFromCircle(a,n))}var i=e.fromOLFeature(o,r);e.props.onEndDrawing(i,e.props.drawOwner),e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner,e.props.features.concat([i])),e.selectInteraction&&(e.addSelectInteraction(),e.selectInteraction.setActive(!0))})),e.props.map.addInteraction(e.drawInteraction),e.setDoubleClickZoomEnabled(!1)})),Ge(Se(e),"toMulti",(function(e){return"Point"===e.getType()?new V.Z([e.getCoordinates()]):e})),Ge(Se(e),"handleDrawAndEdit",(function(t,r,o,n){e.drawInteraction&&e.removeDrawInteraction(),e.drawInteraction=new B.ZP(e.drawPropertiesForGeometryType((0,k.getSimpleGeomType)(t),o,(0,k.isSimpleGeomType)(t)?e.drawSource:null,n)),e.props.map.disableEventListener("singleclick"),e.drawInteraction.on("drawstart",(function(){e.selectInteraction&&(e.selectInteraction.getFeatures().clear(),e.selectInteraction.setActive(!1))})),e.drawInteraction.on("drawend",(function(o){var a=o.feature.clone(),i=M().v1();a.set("id",i);var s,p,u,d=a.getGeometry(),g=e.drawLayer.getSource().getFeatures(),f=e.props.features;if(e.props.options.transformToFeatureCollection){var y;if("Circle"===t){var m,w,v;if(u="Polygon",e.props.options.geodesic){w=o.feature.getGeometry().geodesicCenter||(0,le.qg)(d.getExtent());var S=e.props.map.getView().getProjection().getCode(),h=[de(w),de(d.getCoordinates()[0][0])].map((function(t){return e.reprojectCoordinatesToWGS84(t,S)}));m=(0,L.calculateDistance)(h,"haversine"),v=(0,q.iu)(h[0],m).clone().transform("EPSG:4326",S).getCoordinates()}else m=d.getRadius(),w=d.getCenter(),v=e.polygonCoordsFromCircle(w,m);y=e.getNewFeature(u,v),w=(0,L.reproject)(w,e.getMapCrs(),"EPSG:4326",!1);var G=n&&n.features&&n.features.length&&n.features[0]&&n.features[0].features&&n.features[0].features.length&&n.features[0].features.filter((function(e){return e.properties.isDrawing}))[0].properties.id||i;y.setProperties({isCircle:!0,radius:m,center:[w.x,w.y],id:G,crs:e.getMapCrs(),isGeodesic:e.props.options.geodesic})}else if("Polygon"===t){u=e.props.drawMethod;var P=d.getCoordinates();P[0].push(P[0][0]),y=e.getNewFeature(u,P)}else{u="Text"===t?"Point":e.props.drawMethod;var F=d.getCoordinates();y=e.getNewFeature(u,F),"Text"===t&&y.setProperties({isText:!0,valueText:"."})}var b=g.length>=1?de(e.replaceCirclesWithPolygonsInFeatureColl(g)):[];y.getProperties().id||y.setProperties({id:M().v1()});var I=[].concat(de(b),[y]),T=Pe.writeFeaturesObject(I),x=new _.Z({features:(new R.Z).readFeatures(T)});e.drawLayer.setSource(x);var j=(0,L.reprojectGeoJson)(T,e.getMapCrs(),"EPSG:4326");e.props.onGeometryChanged([j],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"","Text"===t,"Circle"===t),e.props.onEndDrawing(j,e.props.drawOwner),e.props.onDrawingFeatures([C()(j.features)])}else{if("Circle"===t){u="Polygon";var E=d.getRadius(),D=d.getCenter(),Z=e.polygonCoordsFromCircle(D,E),A=e.toMulti(e.createOLGeometry({type:u,coordinates:Z}));if(1===f.length&&f[0]&&!f[0].geometry)s=[],p=new $.default([A]);else if((s=e.toMulti(c()(g).getGeometry())).getGeometries){var W=e.replaceCirclesWithPolygons(c()(g));p=new $.default([].concat(de(W),[A]))}else p=new $.default([s,A]);a.setGeometry(p)}else if("Text"===t||"MultiPoint"===t){var N=d.getCoordinates();u="MultiPoint";var J=e.toMulti(e.createOLGeometry({type:u,coordinates:[N]}));if(1!==f.length||f[0].geometry)if((s=e.toMulti(c()(g).getGeometry())).getGeometries){var B=e.replaceCirclesWithPolygons(c()(g));p=new $.default([].concat(de(B),[J]))}else(p=s.clone()).appendPoint(J.getPoint(0));else s=[],p=J.clone();a.setGeometry(p)}else if(!(0,k.isSimpleGeomType)(t)){var V;p=null,s=1!==f.length||f[0].geometry?e.toMulti(c()(g).getGeometry()):e.toMulti(e.createOLGeometry({type:t,coordinates:null}));var H=g.map((function(e){return"GeometryCollection"===e.getGeometry().getType()?e.getGeometry().getGeometries():e.getGeometry()}));"GeometryCollection"===g[0].getGeometry().getType()&&(H=H[0]);var X=l()(H,(function(e){return e.getType()===t}));if(X?e.appendToMultiGeometry(t,X,d):V=e.toMulti(e.createOLGeometry({type:t,coordinates:d.getCoordinates()})),d.getType()!==(0,k.getSimpleGeomType)(s.getType())){var z=c()(g).getGeometry().getGeometries?e.replaceCirclesWithPolygons(c()(g)):[];if(X){var K=z.map((function(e){return e.getType()===X.getType()?X:e}));p=new $.default(K)}else p="GeometryCollection"===s.getType()?new $.default([].concat(de(z),[V])):"Text"===t?new $.default([V]):new $.default([s,V]);a.setGeometry(p)}else a.setGeometry(X)}var U=e.props.features[0].properties;"Text"===t&&(U=O()({},e.props.features[0].properties,{textValues:(e.props.features[0].properties.textValues||[]).concat(["."]),textGeometriesIndexes:(e.props.features[0].properties.textGeometriesIndexes||[]).concat([a.getGeometry().getGeometries().length-1])})),"Circle"===t&&(U=O()({},U,{circles:(e.props.features[0].properties.circles||[]).concat([a.getGeometry().getGeometries().length-1])}));var Q=e.fromOLFeature(a,r,U),Y=new _.Z({features:(new R.Z).readFeatures(Q)});e.drawLayer.setSource(Y);var ee=(0,L.reprojectGeoJson)(Pe.writeFeatureObject(a.clone()),e.getMapCrs(),"EPSG:4326");"Polygon"===ee.geometry.type&&ee.geometry.coordinates[0].push(ee.geometry.coordinates[0][0]),e.props.onGeometryChanged([ee],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"","Text"===t,"Circle"===t),e.props.onEndDrawing(Q,e.props.drawOwner),Q=(0,L.reprojectGeoJson)(Q,e.getMapCrs(),"EPSG:4326");var te=(0,k.isSimpleGeomType)(e.props.drawMethod)&&"GeometryCollection"!==e.props.features[0].geometry.type?e.props.features.map((function(t){return ye(ye({},t),{},{featureProjection:e.getMapCrs()})})).concat([ye(ye({},Q),{},{type:"Feature",geometry:{type:Q.type,coordinates:Q.coordinates},featureProjection:e.getMapCrs(),properties:U})]):[ye(ye({},Q),{},{properties:U})];e.props.options.stopAfterDrawing?e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner,te):e.props.onChangeDrawingStatus("replace",e.props.drawMethod,e.props.drawOwner,te.map((function(t){return(0,L.reprojectGeoJson)(t,"EPSG:4326",e.getMapCrs())})),O()({},e.props.options,{featureProjection:e.getMapCrs()})),e.selectInteraction&&(e.addSelectInteraction(),e.selectInteraction.setActive(!0))}})),e.props.map.addInteraction(e.drawInteraction),e.setDoubleClickZoomEnabled(!1)})),Ge(Se(e),"drawPropertiesForGeometryType",(function(t,r,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a={source:e.drawSource||o,type:t,style:"Marker"===t?(0,W.Fc)(n.style):new Q.default({fill:new Y.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ee.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new re.default({radius:5,stroke:new ee.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new Y.default({color:"rgba(255, 255, 255, 0.2)"})})}),features:new oe.Z,condition:ne.Bx},i={};switch(t){case"BBOX":i.type="LineString",i.maxPoints=2,i.geometryFunction=function(e,t){var r=t;r||(r=new q.ZP([]));var o=e[0],n=e[1];return r.setCoordinates([[o,[o[0],n[1]],n,[n[0],o[1]],o]]),r};break;case"Circle":i.maxPoints=100,n.options&&n.options.geodesic?i.geometryFunction=function(t,r){var o=r;o||(o=new q.ZP([])).setProperties({geodesicCenter:de(t[0])},!0);var n=e.props.map.getView().getProjection().getCode(),a=de(t).map((function(t){return e.reprojectCoordinatesToWGS84(t,n)})),i=(0,L.calculateDistance)(a,"haversine"),s=(0,q.iu)(a[0],i).clone().transform("EPSG:4326",n).getCoordinates();return o.setCoordinates(s),o}:i.type=t;break;case"Marker":case"Point":case"Text":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":"LineString"===t&&(i.maxPoints=r);var s="Text"===t||"Marker"===t?"Point":t;i.type=s,i.geometryFunction=function(t,r){var o=r;return o||(o=e.createOLGeometry({type:s,coordinates:null,options:n.options})),o.setCoordinates(t),o};break;default:return{}}return O()({},a,i)})),Ge(Se(e),"setDoubleClickZoomEnabled",(function(t){for(var r=e.props.map.getInteractions(),o=0;o<r.getLength();o++){var n=r.item(o);if(n instanceof ae.Z){n.setActive(t);break}}})),Ge(Se(e),"updateFeatureExtent",(function(t){var r=t.features.getArray(),o=e.props.features.map((function(t){var o=c()(r.filter((function(r){return e.fromOLFeature(r).id===t.id})));return o?O()({},t,{geometry:o.geometry,center:o.center,extent:o.extent,coordinate:o.coordinates,radius:o.radius}):t}));e.props.onChangeDrawingStatus("replace",e.props.drawMethod,e.props.drawOwner,o)})),Ge(Se(e),"addInteractions",(function(t){e.clean(),e.drawLayer||e.addLayer(t),e.addDrawInteraction(t.drawMethod,t.options.startingPoint,t.options.maxPoints,t),t.options&&t.options.editEnabled&&(e.addSelectInteraction(),e.translateInteraction&&e.props.map.removeInteraction(e.translateInteraction),e.translateInteraction=new ie.Z({features:e.selectInteraction.getFeatures()}),e.translateInteraction.setActive(!1),e.translateInteraction.on("translateend",e.updateFeatureExtent),e.props.map.addInteraction(e.translateInteraction),e.addTranslateListener(),e.modifyInteraction&&e.props.map.removeInteraction(e.modifyInteraction),e.modifyInteraction=new se.Z({features:e.selectInteraction.getFeatures(),condition:function(e){return(0,ne.Xp)(e)&&!(0,ne.Ko)(e)}}),e.props.map.addInteraction(e.modifyInteraction)),e.drawSource.clear(),t.features.length>0&&e.addFeatures(t)})),Ge(Se(e),"addSingleClickListener",(function(e,t){return t.map.on("singleclick",e)})),Ge(Se(e),"addDrawOrEditInteractions",(function(t){e.state&&e.state.keySingleClickCallback&&(0,pe.B)(e.state.keySingleClickCallback),e.clean();var r,o=t.features.map((function(r){return(0,L.reprojectGeoJson)(r,t.options.featureProjection,e.getMapCrs())||{}})),n=o.every((function(e){return!!(e&&e.features&&e.features.length)})),a=o.every((function(e){return!!(e&&e.properties&&e.properties.isCircle)}));if(n)r=O()({},t,{features:o});else if(a)r=O()({},t,{features:[]});else{var i=o.reduce((function(e,t){return t.geometry?[].concat(de(e),[ye(ye({},t.geometry),{},{properties:t.properties})]):e}),[]);r=O()({},t,{features:i})}e.drawLayer?(e.drawSource.clear(),e.addFeatures(r)):e.addLayer(r),t.options.editEnabled&&(!t.options.geodesic&&e.addModifyInteraction(t),!1!==t.options.translateEnabled&&e.addTranslateInteraction(),t.options.addClickCallback&&e.setState({keySingleClickCallback:e.addSingleClickListener((function(r){if(e.drawSource&&t.options){var o,n=e.drawSource.getFeatures(),a=0,i=n&&n.length&&n.filter((function(e,t){return e.getProperties().canEdit&&(a=t),e.getProperties().canEdit}))[0]||null,s=i&&i.getGeometry()&&i.getGeometry().getCoordinates&&i.getGeometry().getCoordinates()||[],c=[],p=t.drawMethod;switch(p){case"Polygon":c=s.length?(0,A.F7)(s)?[(c=(c=d()(s[0],0,s[0].length-1)).concat([r.coordinate])).concat([s[0][0]])]:s[0].length>1?[[].concat(de(s[0]),[r.coordinate,s[0][0]])]:[[].concat(de(s[0]),[r.coordinate])]:[[r.coordinate]],(o=e.getNewFeature(p,c)).setProperties(f()(i&&i.getProperties()||{},"geometry"));break;case"LineString":case"MultiPoint":c=s.length?[].concat(de(s),[r.coordinate]):[r.coordinate],(o=e.getNewFeature(p,c)).setProperties(f()(i&&i.getProperties()||{},"geometry"));break;case"Circle":p="Polygon";var l=i&&i.getProperties()&&i.getProperties().radius||1e4,u=r.coordinate,g=e.polygonCoordsFromCircle(u,l);if(t.options.geodesic){var y=e.props.map.getView().getProjection().getCode(),m=[de(u)].map((function(t){return e.reprojectCoordinatesToWGS84(t,y)}));g=(0,q.iu)(m[0],l).clone().transform("EPSG:4326",y).getCoordinates()}o=e.getNewFeature(p,g),u=(0,L.reproject)(u,e.getMapCrs(),"EPSG:4326",!1),o.setProperties(f()(i&&i.getProperties()||{},"geometry")),o.setProperties({isCircle:!0,radius:l,center:[u.x,u.y],isGeodesic:e.props.options.geodesic});break;case"Text":p="Point",(o=e.getNewFeature(p,r.coordinate)).setProperties(f()(i&&i.getProperties()||{},"geometry")),o.setProperties({isText:!0,valueText:i&&i.getProperties()&&i.getProperties().valueText||t.options.defaultTextAnnotation||"New"});break;default:c=r.coordinate,(o=e.getNewFeature(p,c)).setProperties(f()(i&&i.getProperties()||{},"geometry"))}var w={type:"Feature",geometry:{coordinates:de((0,L.reprojectGeoJson)(Pe.writeFeaturesObject([o.clone()]),e.getMapCrs(),"EPSG:4326").features[0].geometry.coordinates),type:p},properties:ye({},f()(o.getProperties(),"geometry"))};e.props.onDrawingFeatures([w]),t.options.geodesic||(o=(0,Z.a)(o,e.getMapCrs())),n[a]=o,e.drawSource=new _.Z({features:n}),e.drawLayer.setSource(e.drawSource),e.addModifyInteraction(t)}}),t)})),t.options&&t.options.selectEnabled&&e.addSelectInteraction(t.options&&t.options.selected,t),t.options.drawEnabled&&e.handleDrawAndEdit(t.drawMethod,t.options.startingPoint,t.options.maxPoints,t)})),Ge(Se(e),"addSelectInteraction",(function(t,r){var o;if(e.selectInteraction&&e.props.map.removeInteraction(e.selectInteraction),t&&(o=l()(e.drawSource.getFeatures(),(function(e){return e.getProperties().id===t.properties.id})))&&e.selectFeature(o),e.selectInteraction=new ce.Z({layers:[e.drawLayer],features:new oe.Z(t&&o?[o]:null)}),o){var n=e.convertGeometryTypeToStyleType(r.drawMethod);o.setStyle((0,W.C2)(ye(ye({},r),{},{style:ye(ye({},r.style),{},{type:n,highlight:!0,useSelectedStyle:r.options.useSelectedStyle})}),!1,r.features[0]&&r.features[0].properties&&r.features[0].properties.valueText&&[r.features[0].properties.valueText]||[]))}e.selectInteraction.on("select",(function(t){var r=e.selectInteraction.getFeatures().getArray(),o=[];return r.length&&(o=e.props.features.map((function(o){var n;if("FeatureCollection"===o.type&&r.length>0){var a=c()(r);if(e.selectFeature(a),a.getGeometry&&"Circle"===a.getGeometry().getType()){var i=a.getGeometry().getRadius(),s=(0,L.reproject)(a.getGeometry().getCenter(),e.getMapCrs(),"EPSG:4326");a.setProperties({center:[s.x,s.y],radius:i}),a=e.replaceCircleWithPolygon(a.clone())}return e.drawSource.getFeatures().forEach((function(t){t.getProperties().id===a.getProperties().id?e.selectFeature(a):e.deselectFeature(t)})),(0,L.reprojectGeoJson)(Pe.writeFeatureObject(a.clone()),e.getMapCrs(),"EPSG:4326")}return n=r.reduce((function(e,t){return t.get("id")===o.id||e}),!1),O()({},o,{selected:n,selectedFeature:t.selected})})),e.props.onSelectFeatures(o)),0===r.length?(e.props.onSelectFeatures([]),e.drawSource.getFeatures().map((function(t){return e.deselectFeature(t)})),null):null})),e.props.map.addInteraction(e.selectInteraction)})),Ge(Se(e),"selectFeature",(function(e){e.setProperties({selected:!0})})),Ge(Se(e),"deselectFeature",(function(e){e.setProperties({selected:!1})})),Ge(Se(e),"removeDrawInteraction",(function(){e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,setTimeout((function(){return e.props.map.enableEventListener("singleclick")}),500),setTimeout((function(){return e.setDoubleClickZoomEnabled(!0)}),250))})),Ge(Se(e),"removeInteractions",(function(){e.removeDrawInteraction(),e.selectInteraction&&(e.props.map.enableEventListener("singleclick"),e.props.map.removeInteraction(e.selectInteraction)),e.modifyInteraction&&(e.props.map.removeInteraction(e.modifyInteraction),e.props.map.un("singleclick")),e.translateInteraction&&e.props.map.removeInteraction(e.translateInteraction)})),Ge(Se(e),"clean",(function(t){t||e.removeInteractions(),e.drawLayer&&(e.props.map.removeLayer(e.drawLayer),e.geojson=null,e.drawLayer=null,e.drawSource=null)})),Ge(Se(e),"fromOLFeature",(function(t,r,o){var n=t.getGeometry(),a=e.props.map.getView().getProjection().getCode(),s=n.getType();if(n.getCoordinates){var c,p=n.getExtent(),l=n.getProperties(),u=l&&l.geodesicCenter||(0,le.qg)(p),d=n.getCoordinates();if(r&&(d=i()(r,d),n.setCoordinates(d)),"Circle"===e.props.drawMethod)if(e.props.options.geodesic){var g=[de(u),de(d[0][0])].map((function(t){return e.reprojectCoordinatesToWGS84(t,a)}));c=(0,L.calculateDistance)(g,"haversine")}else c=e.calculateRadius(u,d);return O()({},{id:t.get("id"),type:s,extent:p,center:u,coordinates:d,radius:c,style:e.fromOlStyle(t.getStyle()),projection:e.getMapCrs()})}var f=n.getGeometries().map((function(n,s){var c,p=n.getExtent(),l=(0,le.qg)(p),u=n.getCoordinates();if(r&&(u=i()(r,u),n.setCoordinates(u)),o.circles&&-1!==o.circles.indexOf(s))if(e.props.options.geodesic){var d=[de(l),de(u[0][0])].map((function(t){return e.reprojectCoordinatesToWGS84(t,a)}));c=(0,L.calculateDistance)(d,"haversine")}else c=e.calculateRadius(l,u);else c=0;return O()({},{id:t.get("id"),type:n.getType(),extent:p,center:l,coordinates:u,radius:c,style:e.fromOlStyle(t.getStyle()),projection:e.getMapCrs()})}));return O()({},{type:"Feature",id:t.get("id"),style:e.fromOlStyle(t.getStyle()),geometry:{type:"GeometryCollection",geometries:f},projection:a})})),Ge(Se(e),"reprojectCoordinatesToWGS84",(function(e,t){var r=(0,L.reproject)(e,t,"EPSG:4326");return[r.x,r.y]})),Ge(Se(e),"toOlFeature",(function(t){return c()(e.drawSource.getFeatures().filter((function(e){return e.get("id")===t.id})))})),Ge(Se(e),"fromOlStyle",(function(t){return t?{fillColor:e.rgbToHex(t.getFill().getColor()),fillTransparency:t.getFill().getColor()[3],strokeColor:t.getStroke().getColor(),strokeWidth:t.getStroke().getWidth(),text:t.getText().getText()}:{}})),Ge(Se(e),"toOlStyle",(function(t,r,o){var n=t&&t.fillColor?t.fillColor:[255,255,255,.2];"string"==typeof n&&(n=e.hexToRgb(n).concat([t.fillOpacity>=0&&t.fillOpacity<=1?t.fillOpacity:1])),t&&t.fillTransparency&&(n[3]=t.fillTransparency);var a=t&&(t.strokeColor||t.color)?t.strokeColor||t.color:"#ffcc33";r&&(a="#4a90e2"),a=e.hexToRgb(a).concat([t&&t.opacity||1]);var i=new Q.default({fill:new Y.default({color:n}),stroke:new ee.default({color:a,width:t&&(t.strokeWidth||t.weight)?t.strokeWidth||t.weight:2}),text:new te.default({text:t&&t.text?t.text:"",fill:new Y.default({color:t&&(t.strokeColor||t.color)?t.strokeColor||t.color:"#000"}),stroke:new ee.default({color:"#fff",width:2}),font:t&&t.fontSize?t.fontSize+"px helvetica":""})});return"GeometryCollection"===o?[].concat(de((0,W.EC)({style:{iconGlyph:"comment",iconShape:"square",iconColor:"blue"}})),[i]):t&&(t.iconUrl||t.iconGlyph)?(0,W.EC)({style:t}):i})),Ge(Se(e),"hexToRgb",(function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,o){return t+t+r+r+o+o})));return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null})),Ge(Se(e),"componentToHex",(function(e){var t=e.toString(16);return 1===t.length?"0"+t:t})),Ge(Se(e),"rgbToHex",(function(t){return"#"+e.componentToHex(t[0])+e.componentToHex(t[1])+e.componentToHex(t[2])})),Ge(Se(e),"addModifyInteraction",(function(t){e.modifyInteraction&&e.props.map.removeInteraction(e.modifyInteraction);var r=t&&t.options&&t.options.editFilter;e.modifyFeatureColl=new oe.Z(S()(e.drawLayer.getSource().getFeatures(),r)),e.modifyInteraction=new se.Z({features:e.modifyFeatureColl,condition:function(e){return(0,ne.Xp)(e)&&!(0,ne.Ko)(e)}}),e.modifyInteraction.on("modifyend",(function(t){var r=t.features.getArray().map((function(t){var r=t.clone();if(r.getGeometry&&"GeometryCollection"===r.getGeometry().getType()&&r.getGeometry().setGeometries(e.replaceCirclesWithPolygons(r)),r.getGeometry&&r.getGeometry()&&"Circle"===r.getGeometry().getType()){var o=(0,L.reproject)(r.getGeometry().getCenter(),e.getMapCrs(),"EPSG:4326"),n=r.getGeometry().getRadius();r.setProperties({center:[o.x,o.y],radius:n}),t.setProperties({center:[o.x,o.y],radius:n}),r=e.replaceCircleWithPolygon(r.clone())}return(0,L.reprojectGeoJson)(Pe.writeFeatureObject(r),e.getMapCrs(),"EPSG:4326")}));e.props.options.transformToFeatureCollection?e.props.onDrawingFeatures(r):e.props.onGeometryChanged(r,e.props.drawOwner,!1,"editing","editing")})),e.props.map.addInteraction(e.modifyInteraction)})),Ge(Se(e),"addTranslateInteraction",(function(){e.translateInteraction&&e.props.map.removeInteraction(e.translateInteraction),e.translateInteraction=new ie.Z({features:new oe.Z(e.drawLayer.getSource().getFeatures())}),e.translateInteraction.setActive(!1),e.translateInteraction.on("translateend",(function(t){var r=t.features.getArray().map((function(t){var r=t.clone();if(r.getGeometry&&"GeometryCollection"===r.getGeometry().getType()&&r.getGeometry().setGeometries(e.replaceCirclesWithPolygons(r)),r.getGeometry&&r.getGeometry()&&"Circle"===r.getGeometry().getType()){var o=(0,L.reproject)(r.getGeometry().getCenter(),e.getMapCrs(),"EPSG:4326"),n=r.getGeometry().getRadius();r.setProperties({center:[o.x,o.y],radius:n}),r=e.replaceCircleWithPolygon(r)}return t.getProperties()&&t.getProperties().selected&&e.props.onSelectFeatures([(0,L.reprojectGeoJson)(Pe.writeFeatureObject(r),e.getMapCrs(),"EPSG:4326")]),(0,L.reprojectGeoJson)(Pe.writeFeatureObject(r),e.getMapCrs(),"EPSG:4326")}));e.props.options.transformToFeatureCollection?e.props.onDrawingFeatures(r):e.props.onGeometryChanged(r,e.props.drawOwner,e.props.drawOwner,!1,"Text"===e.props.drawMethod,"Circle"===e.props.drawMethod)})),e.addTranslateListener(),e.props.map.addInteraction(e.translateInteraction)})),Ge(Se(e),"createOLGeometry",(function(t){var r=t.type,o=t.coordinates,n=t.radius,a=t.center,i=t.geometries,s=t.projection,c=t.options,p=void 0===c?{}:c;return"GeometryCollection"===r?i&&i.length?new $.default(i.map((function(t){return e.olGeomFromType({type:t.type})}))):new $.default([]):e.olGeomFromType({type:r,coordinates:o,radius:n,center:a,projection:s,options:p})})),Ge(Se(e),"olGeomFromType",(function(t){var r,o=t.type,n=t.coordinates,a=t.radius,i=t.center,s=t.projection,c=t.options;switch(o){case"Point":case"Marker":case"Text":r=new H.Z(n||[]);break;case"LineString":r=new X.Z(n||[]);break;case"MultiPoint":r=new V.Z(n||[]);break;case"MultiLineString":r=new z.Z(n||[]);break;case"MultiPolygon":r=new K.Z(n||[]);break;default:var p=m()(i)?{x:i[0],y:i[1]}:i,l=s&&!isNaN(parseFloat(a))&&p&&!G()(p.x)&&!G()(p.y)&&!isNaN(parseFloat(p.x))&&!isNaN(parseFloat(p.y));(r=l?c.geodesic?(0,q.iu)(e.reprojectCoordinatesToWGS84([p.x,p.y],s),a,100).clone().transform("EPSG:4326",s):(0,q.Bb)(new U.Z([p.x,p.y],a),100):new q.ZP(n&&m()(n[0])?n:[]))&&l&&c.geodesic&&r.setProperties({geodesicCenter:[p.x,p.y]},!0)}return r})),Ge(Se(e),"convertGeometryTypeToStyleType",(function(e){return"BBOX"===e?"LineString":e})),Ge(Se(e),"appendToMultiGeometry",(function(e,t,r){switch(e){case"MultiPoint":t.appendPoint(r);break;case"MultiLineString":t.appendLineString(r);break;case"MultiPolygon":var o=r.getCoordinates();o[0].push(o[0][0]),r.setCoordinates(o),t.appendPolygon(r)}})),Ge(Se(e),"calculateRadius",(function(e,t){return m()(t)&&m()(t[0])&&m()(t[0][0])?Math.sqrt(Math.pow(e[0]-t[0][0][0],2)+Math.pow(e[1]-t[0][0][1],2)):100})),Ge(Se(e),"polygonFromCircle",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,q.Bb)(new U.Z(e,t),r)})),Ge(Se(e),"polygonCoordsFromCircle",(function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return e.polygonFromCircle(t,r,o).getCoordinates()})),Ge(Se(e),"replaceCirclesWithPolygonsInFeatureColl",(function(t){return t.map((function(t){return"Circle"!==t.getGeometry().getType()?t:e.replaceCircleWithPolygon(t)}))})),Ge(Se(e),"replaceCircleWithPolygon",(function(t){if(t.getProperties().isCircle&&"Circle"===t.getGeometry().getType()){var r=t.getGeometry().getCenter(),o=t.getGeometry().getRadius();return t.setGeometry(e.polygonFromCircle(r,o)),t}return t})),Ge(Se(e),"replaceCirclesWithPolygons",(function(t){return t.getGeometry&&!t.getGeometry().getGeometries?t:t.getGeometry().getGeometries().map((function(r,o){if("Circle"!==r.getType())return r;if(t.getProperties()&&t.getProperties().circles&&-1!==t.getProperties().circles.indexOf(o)){var n=r.getCenter(),a=r.getRadius();return e.polygonFromCircle(n,a)}return r}))})),Ge(Se(e),"replacePolygonsWithCircles",(function(t){return t.getGeometry().getGeometries().map((function(r,o){if("Polygon"!==r.getType())return r;if(t.getProperties()&&t.getProperties().circles&&-1!==t.getProperties().circles.indexOf(o)){var n=r.getExtent(),a=(0,le.qg)(n),i=e.calculateRadius(a,r.getCoordinates());return new U.Z(a,i)}return r}))})),Ge(Se(e),"addTranslateListener",(function(){document.addEventListener("keydown",(function(t){t.altKey&&"AltLeft"===t.code&&e.translateInteraction.setActive(!0)})),document.addEventListener("keyup",(function(t){"AltLeft"===t.code&&e.translateInteraction.setActive(!1)}))})),e}return t=s,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(this.drawLayer&&this.updateFeatureStyles(e.features),!e.drawStatus&&this.selectInteraction&&this.selectInteraction.getFeatures().clear(),this.props.drawStatus!==e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addLayer(e);break;case"start":this.addInteractions(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeDrawInteraction();break;case"replace":this.replaceFeatures(e);break;case"updateStyle":this.updateOnlyFeatureStyles(e);break;case"clean":this.clean();break;case"cleanAndContinueDrawing":this.clean(!0);break;case"endDrawing":this.endDrawing(e);break;default:return}}},{key:"render",value:function(){return null}}])&&we(t.prototype,r),s}(n().Component);Ge(Fe,"propTypes",{map:I().object,drawOwner:I().string,drawStatus:I().string,drawMethod:I().string,options:I().object,features:I().array,onChangeDrawingStatus:I().func,onGeometryChanged:I().func,onDrawStopped:I().func,onDrawingFeatures:I().func,onSelectFeatures:I().func,onEndDrawing:I().func,style:I().object}),Ge(Fe,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onDrawingFeatures:function(){},onSelectFeatures:function(){},onEndDrawing:function(){}})}}]);
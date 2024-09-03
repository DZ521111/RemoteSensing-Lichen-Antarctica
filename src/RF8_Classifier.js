var imageCollection4 = ee.ImageCollection("COPERNICUS/S2_SR"),
    imageCollection3 = ee.ImageCollection("LANDSAT/LC08/C01/T2_SR"),
    geometry1 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.34597, -69.35141]),
    geometry2 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.24129, -69.39066]),
    geometry3 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.19292, -69.40391]),
    geometry4 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.24108, -69.39072]),
    geometry5 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.24024, -69.39146]),
    geometry6 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.19136, -69.40349]),
    geometry7 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.01898, -69.37386]),
    geometry8 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.32302, -69.35683]),
    geometry9 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([76.14082, -69.37288]),
    Lhills = 
    /* color: #ffe36d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[75.97389219268304, -69.334460162952],
          [75.97389219268304, -69.47623800650955],
          [76.47239683135491, -69.47623800650955],
          [76.47239683135491, -69.334460162952]]], null, false),
    lichens = /* color: #77a300 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.24108, -69.39072]),
            {
              "LAND": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19136, -69.40349]),
            {
              "LAND": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01958081481934, -69.37382220563885]),
            {
              "LAND": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14081530613421, -69.37288000000001]),
            {
              "LAND": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19320967857361, -69.40391377416567]),
            {
              "LAND": 0,
              "system:index": "4"
            })]),
    snow = /* color: #000000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.17123031408514, -69.39214765849754]),
            {
              "LAND": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.17947006017889, -69.36022245873906]),
            {
              "LAND": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.26667403967107, -69.36312670312417]),
            {
              "LAND": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.35216140539373, -69.38223655814245]),
            {
              "LAND": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21517562658514, -69.40603969560938]),
            {
              "LAND": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15749740392889, -69.40555664472433]),
            {
              "LAND": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09123611242498, -69.39263101022001]),
            {
              "LAND": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.08848953039373, -69.37546538205346]),
            {
              "LAND": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04042434484685, -69.39504760617994]),
            {
              "LAND": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.03115463049139, -69.36699842101322]),
            {
              "LAND": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1856498697492, -69.36881304962115]),
            {
              "LAND": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2617081123974, -69.44143621889012]),
            {
              "LAND": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34273228231928, -69.42985907292567]),
            {
              "LAND": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([76.58649143759271, -69.39678165554561]),
            {
              "LAND": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([76.48486790243646, -69.43444243879955]),
            {
              "LAND": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([76.37019810263178, -69.44625818968817]),
            {
              "LAND": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([76.22256931845209, -69.45493501047649]),
            {
              "LAND": 1,
              "system:index": "16"
            })]),
    water = /* color: #00beff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([75.68401262694162, -68.92080955660259]),
            {
              "LAND": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([75.12920305662912, -68.97014586241673]),
            {
              "LAND": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([75.36540911131662, -69.02232197828152]),
            {
              "LAND": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.50548479491037, -68.86542174356305]),
            {
              "LAND": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.63068773691197, -69.02110057306797]),
            {
              "LAND": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([75.24017261536763, -68.80663925251181]),
            {
              "LAND": 2,
              "system:index": "5"
            })]),
    blundell_orthogneiss = /* color: #ff9797 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.06422514757493, -69.39650913571214]),
            {
              "LAND": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.06315226396897, -69.39691688188253]),
            {
              "LAND": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.07061953386643, -69.39385104560002]),
            {
              "LAND": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.07014746507981, -69.3930354294679]),
            {
              "LAND": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20732504206264, -69.41022485645902]),
            {
              "LAND": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2206287987765, -69.41334872267426]),
            {
              "LAND": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.22247415857875, -69.4146615166309]),
            {
              "LAND": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20882707911097, -69.41242821018415]),
            {
              "LAND": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.05908334981456, -69.4264018412313]),
            {
              "LAND": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.06071413289561, -69.42507468170304]),
            {
              "LAND": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.16836388757366, -69.40964020440387]),
            {
              "LAND": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21368249108929, -69.41175307117908]),
            {
              "LAND": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.17900689294476, -69.40450809295851]),
            {
              "LAND": 3,
              "system:index": "12"
            })]),
    broknes_paragneiss = /* color: #9b7782 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.34997573862543, -69.38605784964818]),
            {
              "LAND": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34551254282465, -69.38382157497355]),
            {
              "LAND": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.33109298716059, -69.39107351373032]),
            {
              "LAND": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.35100570688715, -69.39300695194702]),
            {
              "LAND": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.31701675425043, -69.38442599641505]),
            {
              "LAND": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.31942001352778, -69.38847518289475]),
            {
              "LAND": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.35126414126948, -69.37523938018805]),
            {
              "LAND": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30525889224604, -69.37439282477341]),
            {
              "LAND": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.28225626773433, -69.3780206854325]),
            {
              "LAND": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32105173892573, -69.39095508536974]),
            {
              "LAND": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.33135142154292, -69.3847910591249]),
            {
              "LAND": 4,
              "system:index": "10"
            })]),
    halfmoon = 
    /* color: #ce95d6 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-59.93910860108823, -62.58069601781707],
          [-59.93910860108823, -62.599108932170864],
          [-59.88366197633237, -62.599108932170864],
          [-59.88366197633237, -62.58069601781707]]], null, false),
    plichens = 
    /* color: #a33901 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.24110413988114, -69.39059065524309]),
            {
              "LAND": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19136, -69.40349]),
            {
              "LAND": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01844355819702, -69.37397338268602]),
            {
              "LAND": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14081597668647, -69.37288141735164]),
            {
              "LAND": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19292, -69.40391]),
            {
              "LAND": 0,
              "system:index": "4"
            })]),
    psnow = /* color: #000000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.17123031408514, -69.39214765849754]),
            {
              "LAND": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.17947006017889, -69.36022245873906]),
            {
              "LAND": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.26667403967107, -69.36312670312417]),
            {
              "LAND": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.35216140539373, -69.38223655814245]),
            {
              "LAND": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21517562658514, -69.40603969560938]),
            {
              "LAND": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15749740392889, -69.40555664472433]),
            {
              "LAND": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09123611242498, -69.39263101022001]),
            {
              "LAND": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.08848953039373, -69.37546538205346]),
            {
              "LAND": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04042434484685, -69.39504760617994]),
            {
              "LAND": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.03115463049139, -69.36699842101322]),
            {
              "LAND": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1856498697492, -69.36881304962115]),
            {
              "LAND": 1,
              "system:index": "10"
            })]),
    pwater = /* color: #00beff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([74.99736711912912, -68.91290550226037]),
            {
              "LAND": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([74.79412004881662, -68.89906660010877]),
            {
              "LAND": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([75.36540911131662, -69.02232197828152]),
            {
              "LAND": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.27477190428537, -68.94450475610715]),
            {
              "LAND": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.63068773691197, -69.02110057306797]),
            {
              "LAND": 1,
              "system:index": "4"
            })]),
    p_blundell_orthogneiss = /* color: #ff9797 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.06422514757493, -69.39650913571214]),
            {
              "LAND": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.06315226396897, -69.39691688188253]),
            {
              "LAND": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.07061953386643, -69.39385104560002]),
            {
              "LAND": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.07014746507981, -69.3930354294679]),
            {
              "LAND": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20732504206264, -69.41022485645902]),
            {
              "LAND": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2206287987765, -69.41334872267426]),
            {
              "LAND": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.22247415857875, -69.4146615166309]),
            {
              "LAND": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20882707911097, -69.41242821018415]),
            {
              "LAND": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.05908334981456, -69.4264018412313]),
            {
              "LAND": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.06071413289561, -69.42507468170304]),
            {
              "LAND": 1,
              "system:index": "9"
            })]),
    p_broknes_paragneiss = /* color: #9b7782 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.34997573862543, -69.38605784964818]),
            {
              "LAND": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34551254282465, -69.38382157497355]),
            {
              "LAND": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.33109298716059, -69.39107351373032]),
            {
              "LAND": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.31701675425043, -69.38442599641505]),
            {
              "LAND": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.31942001352778, -69.38847518289475]),
            {
              "LAND": 1,
              "system:index": "4"
            })]);



            Map.addLayer(Lhills);

            function maskS2clouds(image) {
              var qa = image.select('QA60');
            
              // Bits 10 and 11 are clouds and cirrus, respectively.
              var cloudBitMask = 1 << 10;
              var cirrusBitMask = 1 << 11;
            
              // Both flags should be set to zero, indicating clear conditions.
              var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
                  .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
            
              return image.updateMask(mask).divide(10000);
            }
            
            var dataset = ee.ImageCollection('COPERNICUS/S2_SR')
                              .filterDate('2020-10-01', '2021-02-28').select(['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B9', 'B11', 'B12', 'QA60'])
                              // Pre-filter to get less cloudy granules.
                              .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
                              .map(maskS2clouds);
            
            var visualization = {
              min: 0.0,
              max: 0.3,
              bands: ['B4', 'B3', 'B2'],
            };
            
            Map.setCenter(76.19136, -69.40349, 12);
            
            var addNDSI = function(image) {
              var ndsi = image.normalizedDifference(['B3', 'B11']).rename('NDSI');
              return image.addBands(ndsi);
            };
            
            var S2_NDSI = dataset.map(addNDSI).median();
            
            //Map.addLayer(S2_NDSI, visualization, 'image');
            
            //var snow_mask = ee.Image(0)
            //            .clip(Lhills)
            //            .where(NDSI.gt(0.4), 1);
            // var b3 = dataset.select('B3');
            // var b11 = dataset.select('B11');
            // var ndsi = b3.subtract(b3).divide(b3.add(b11));
            // ndsi = ndsi.clip(Lhills)
            
            // var snow_mask = ee.Image(0)
            //             .clip(Lhills)
            //             .where(ndsi.gt(0.4), 1);
            
            // //Map.addLayer(S2_NDSI, visualization, 'image');
            
            // Map.addLayer(snow_mask, visualization, 'image');
            
            // Select the bands for training
            
            var newfc_1 = lichens.merge(snow).merge(water).merge(blundell_orthogneiss).merge(broknes_paragneiss);
            var newfc_2 = plichens.merge(psnow).merge(pwater).merge(p_blundell_orthogneiss).merge(p_broknes_paragneiss);
            
            var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B9', 'B11', 'B12', 'QA60',  'NDSI'];
            
            // Sample the input imagery to get a FeatureCollection of training data.
            var training_1 = S2_NDSI.select(bands).sampleRegions({
              collection: newfc_1,
              properties: ['LAND'],
              scale: 30
            });
            
            // Sample the input imagery to get a FeatureCollection of training data.
            var training_2 = S2_NDSI.select(bands).sampleRegions({
              collection: newfc_2,
              properties: ['LAND'],
              scale: 30
            });
            
            print(training_1.size())
            print(training_1.first());
            
            var label = 'LAND';
            var trained_1 = ee.Classifier.smileRandomForest(8).train({
              features: training_1,
              classProperty: 'LAND',
              inputProperties: bands
            });
            
            var trained_2 = ee.Classifier.smileRandomForest({
                numberOfTrees: 10,
                variablesPerSplit: 2,
                seed: 42
            }).setOutputMode('PROBABILITY').train({
                features: training_2,
                classProperty: 'LAND',
                inputProperties: bands
            });
            
            // Classify the image with the same bands used for training.
            var classified_1 = S2_NDSI.select(bands).classify(trained_1);
            // Classify the image with the same bands used for training.
            var classified_2 = S2_NDSI.select(bands).classify(trained_2);
            
            
            var class_id = classified_1.select('classification').rename('class_id');
            var prob = classified_2.select('classification').rename('probability');
            
            var lichen = ee.Image(0).clip(Lhills).where(class_id.eq(0), 1);
            lichen = lichen.addBands(prob);
            
            var visualization2 = {
              min: 0.0,
              max: 0.3,
            };
            
            Map.addLayer(lichen, visualization2);
            
            //S2_NDSI = S2_NDSI.addBands(z_o);
            //S2_NDSI = S2_NDSI.addBands(prob);
            
            //var MF = ee.Image(0).where(S2_NDSI.select('z_o').eq(0), 255);
            
            Map.addLayer(S2_NDSI, visualization, 'image');
            
            //Map.addLayer(MF.clip(Lhills));
            
            print(classified_1);
            print(classified_2);
            
            Map.addLayer(classified_1.clip(Lhills), {min: 0, max: 4, palette: ['green', 'white','grey', 'yellow', 'brown']}, 'Classification');
            var classified = classified_1.clip(Lhills);
            
            print("Re-substitution Accuracy is :");
            print(trained_1.confusionMatrix().accuracy());
            
            print("Confusion Matrix :");
            print(trained_1.confusionMatrix());
            
            var options = {
              lineWidth: 1,
              pointSize: 2,
              hAxis: {title: 'Classes'},
              vAxis: {title: 'Num of pixels'},
              title: 'Number of pixels in each class.'
            };
            
            var pixelChart = ui.Chart.image.byClass({
              image: ee.Image(1).addBands(classified),
              classBand: 'classification', 
              region: Lhills,
              scale: 30,
              reducer: ee.Reducer.count()
            }).setOptions(options);
            
            print(pixelChart);
            
            /*var areaChart = ui.Chart.image.byClass({
              image: ee.Image.pixelArea().addBands(classified),
              classBand: 'classification', 
              region: Lhills,
              scale: 30,
              reducer: ee.Reducer.sum()
            });
                      
            print(areaChart)*/
            
            // Export the image, specifying the CRS, transform, and region.
            /*Export.image.toDrive({
              image: classified_1.{min: 0, max: 4, palette: ['green', 'white','grey', 'yellow', 'brown']},
              description: '5_classes',
              crs: projection.crs,
              crsTransform: projection.transform,
              region: geometry
            });*/
            
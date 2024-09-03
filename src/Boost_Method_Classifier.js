var imageCollection4 = ee.ImageCollection("COPERNICUS/S2_SR"),
    deception_island = 
    /* color: #d0b3d6 */
    /* shown: false */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [
            76.34597,
            -69.35141
          ]
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -60.578763575584176,
                -62.98417868583579
              ],
              [
                -60.560054515946256,
                -62.99322603233741
              ],
              [
                -60.51387478633492,
                -62.98854500701417
              ],
              [
                -60.49018366951947,
                -62.965452261391285
              ],
              [
                -60.50838153515123,
                -62.95016142647646
              ],
              [
                -60.52528664754888,
                -62.96440965278063
              ],
              [
                -60.55318819701225,
                -62.9633589166906
              ],
              [
                -60.57383500052169,
                -62.96392343021935
              ],
              [
                -60.57799881813297,
                -62.95512263543042
              ],
              [
                -60.60004965885191,
                -62.94688247382701
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        }
      ],
      "coordinates": []
    }),
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
    lichens = 
    /* color: #77a300 */
    /* shown: false */
    ee.FeatureCollection(
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
            ee.Geometry.Point([76.01898, -69.37386]),
            {
              "LAND": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14082, -69.37288]),
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
    snow = 
    /* color: #000000 */
    /* shown: false */
    ee.FeatureCollection(
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
    water = 
    /* color: #00beff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([75.05229875975412, -69.07829794480696]),
            {
              "LAND": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([74.79961321287912, -69.03706634674587]),
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
            ee.Geometry.Point([75.29674456053537, -69.11749410956455]),
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
            ee.Geometry.Point([75.67962574036763, -69.07115744771279]),
            {
              "LAND": 2,
              "system:index": "5"
            })]),
    south_part = 
    /* color: #b8ffd6 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-60.66436142518628, -63.0179407679786],
          [-60.55346521127664, -63.01716188954585],
          [-60.539388603421465, -62.99893019269774],
          [-60.654061465080225, -62.98146695640778]]]),
    Dlichens = /* color: #118b61 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.553210391684004, -62.97998527537504]),
            {
              "LC": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55252374617619, -62.97998527537504]),
            {
              "LC": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55115045516057, -62.980531172688266]),
            {
              "LC": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5502921482758, -62.98068714147589]),
            {
              "LC": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5612784764008, -62.97826953170528]),
            {
              "LC": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.52042306868596, -62.976241704751224]),
            {
              "LC": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54874719588322, -62.98201284255581]),
            {
              "LC": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.547717227621504, -62.98224678356106]),
            {
              "LC": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57707132308049, -62.983806342392114]),
            {
              "LC": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55973352400822, -62.97148355836004]),
            {
              "LC": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56007684676213, -62.97183459562466]),
            {
              "LC": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51553071944279, -62.985599732129245]),
            {
              "LC": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.549686681429705, -62.980598378904695]),
            {
              "LC": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54925752798732, -62.980676363223196]),
            {
              "LC": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51604105154689, -62.98551098448255]),
            {
              "LC": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58580998221096, -62.97406266932245]),
            {
              "LC": 0,
              "system:index": "15"
            })]),
    Dnotlichens = /* color: #d4a04b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.588400973959395, -62.97717764236944]),
            {
              "LC": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58685602156682, -62.9793613802425]),
            {
              "LC": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58359445540471, -62.98162293671766]),
            {
              "LC": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58101953475041, -62.98396229369638]),
            {
              "LC": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54840387312932, -62.98411824416812]),
            {
              "LC": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54926218001408, -62.98513190194245]),
            {
              "LC": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55784524886174, -62.99160288785117]),
            {
              "LC": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.558188571615645, -62.99199266049816]),
            {
              "LC": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57423891036076, -62.98107705980243]),
            {
              "LC": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56754411665959, -62.97881546107365]),
            {
              "LC": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.582135333700606, -62.97858149259328]),
            {
              "LC": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58780015914006, -62.97101550211585]),
            {
              "LC": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58677019087834, -62.97148355836004]),
            {
              "LC": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5543261906342, -62.98770487525472]),
            {
              "LC": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55484117476506, -62.98193486180446]),
            {
              "LC": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51467241255803, -62.972965687021514]),
            {
              "LC": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51261247603459, -62.9702353917199]),
            {
              "LC": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54282487837834, -62.985443789566126]),
            {
              "LC": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.545228137655684, -62.985989584895016]),
            {
              "LC": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.555699481649825, -62.99097924079552]),
            {
              "LC": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55123628584904, -62.9754617338377]),
            {
              "LC": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55552750580858, -62.99218676636959]),
            {
              "LC": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.533383188181624, -62.984390376781406]),
            {
              "LC": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.551407947226, -62.98185688084496]),
            {
              "LC": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55089296309514, -62.98209082309902]),
            {
              "LC": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54677309004826, -62.97990728921199]),
            {
              "LC": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.510724200888106, -62.973355708388624]),
            {
              "LC": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51381410567326, -62.97616370859663]),
            {
              "LC": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59071840254826, -62.97093749201312]),
            {
              "LC": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56932119413202, -62.979402188015555]),
            {
              "LC": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58485654874628, -62.969925156257275]),
            {
              "LC": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.551924853323264, -62.98824047810169]),
            {
              "LC": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.549435763357444, -62.988084549635936]),
            {
              "LC": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.571150927542014, -62.980871948493665]),
            {
              "LC": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56085124492483, -62.99209944238353]),
            {
              "LC": 1,
              "system:index": "34"
            })]),
    h2o = /* color: #12dad5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.568917407675215, -62.98392078055625]),
            {
              "LC": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.562909259481856, -62.982283248012806]),
            {
              "LC": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56222261397404, -62.984622552120435]),
            {
              "LC": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58625520674748, -62.98719557029571]),
            {
              "LC": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.545149355513495, -62.99004299680921]),
            {
              "LC": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.53107312260334, -62.98622274552714]),
            {
              "LC": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55476239262287, -62.98450736813146]),
            {
              "LC": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55956891117756, -62.98037445438828]),
            {
              "LC": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59218457279865, -62.977410873334605]),
            {
              "LC": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58789303837482, -62.98115429418351]),
            {
              "LC": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51356366215412, -62.98185613220314]),
            {
              "LC": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51356366215412, -62.97897069030404]),
            {
              "LC": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.51922848759357, -62.989029509450795]),
            {
              "LC": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5260949426717, -62.98801598692357]),
            {
              "LC": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5956965824799, -62.96334259889866]),
            {
              "LC": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59483827559514, -62.96529329571362]),
            {
              "LC": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.572178973837325, -62.982999667945776]),
            {
              "LC": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.650284900351, -63.01607051733153]),
            {
              "LC": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59844316451115, -62.994487082255425]),
            {
              "LC": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59459673282513, -62.96650923270497]),
            {
              "LC": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.593781341284604, -62.96840120558427]),
            {
              "LC": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.507532028461895, -62.98815876387977]),
            {
              "LC": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56727018764158, -62.98504002767649]),
            {
              "LC": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.586667923237286, -62.98309064845319]),
            {
              "LC": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59372247664494, -62.99557832477467]),
            {
              "LC": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58419527022404, -62.99721511209003]),
            {
              "LC": 2,
              "system:index": "25"
            })]),
    ice = /* color: #b4c2c2 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.54780305830998, -62.9625476644807]),
            {
              "LC": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.544198169393965, -62.96223553242729]),
            {
              "LC": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.545228137655684, -62.96403024623462]),
            {
              "LC": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54900468794865, -62.963952217490096]),
            {
              "LC": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54436983077092, -62.964654468694505]),
            {
              "LC": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.52754701582951, -62.95185524431372]),
            {
              "LC": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.52565874068303, -62.96200143120071]),
            {
              "LC": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.528748645468184, -62.96410827477092]),
            {
              "LC": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.53716005293889, -62.96473249556496]),
            {
              "LC": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54162324873967, -62.96574682593233]),
            {
              "LC": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5762988468842, -62.96309388755699]),
            {
              "LC": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.52585877129426, -62.955692393732505]),
            {
              "LC": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.529978644341135, -62.95350688715595]),
            {
              "LC": 3,
              "system:index": "12"
            })]),
    validation_ice = 
    /* color: #d6d5bd */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.64650835005803, -63.00072220452136]),
            {
              "LC": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.64273179976506, -63.00594309492817]),
            {
              "LC": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.63105882613225, -63.011786267585585]),
            {
              "LC": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.628312244101, -63.00220285039211]),
            {
              "LC": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.6751758000092, -63.00072220452136]),
            {
              "LC": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57956041304631, -63.00648850721329]),
            {
              "LC": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59706987349553, -63.00882587299291]),
            {
              "LC": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.61681093184514, -63.00321588061221]),
            {
              "LC": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.661786212606856, -63.00656642242199]),
            {
              "LC": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.62041582076115, -63.00531975412169]),
            {
              "LC": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.663103162638066, -62.99864477696438]),
            {
              "LC": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.63048750101697, -63.00363227103049]),
            {
              "LC": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.613664686075566, -63.00690485094672]),
            {
              "LC": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.63357740580213, -63.00534652532105]),
            {
              "LC": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.6102352318776, -63.00691206856682]),
            {
              "LC": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.60259630060319, -63.011119131130656]),
            {
              "LC": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.5908374962819, -63.007924935355696]),
            {
              "LC": 3,
              "system:index": "16"
            })]),
    validation_notlichen = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.59746463183627, -63.00647193694029]),
            {
              "LC": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57326037768588, -63.01430137991862]),
            {
              "LC": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57360370043978, -63.00951047767531]),
            {
              "LC": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57274539355502, -63.00304345987787]),
            {
              "LC": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58424670581088, -62.9982896777412]),
            {
              "LC": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.593516420166345, -62.99719853655219]),
            {
              "LC": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.608279298584314, -62.997003685620165]),
            {
              "LC": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56716639880404, -63.00608235755548]),
            {
              "LC": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.558154176514, -63.00016011062329]),
            {
              "LC": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.552060197632166, -63.003316194387565]),
            {
              "LC": 1,
              "system:index": "9"
            })]),
    validation_water = 
    /* color: #ffd7fb */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.55128772143588, -63.008536620863836]),
            {
              "LC": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54588038806185, -63.0062771478979]),
            {
              "LC": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56150157336459, -62.99661397985504]),
            {
              "LC": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57592112902865, -62.99450947884035]),
            {
              "LC": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.58442303730961, -63.01519927147812]),
            {
              "LC": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56373784138676, -63.01632868444329]),
            {
              "LC": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55901715352055, -63.01356349242446]),
            {
              "LC": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55378148152348, -63.00908410421339]),
            {
              "LC": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.55496926549752, -63.00545735745673]),
            {
              "LC": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.54793114904244, -62.99891150604418]),
            {
              "LC": 2,
              "system:index": "9"
            })]),
    validation_lichen = 
    /* color: #b4ff9f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-60.6051808697822, -62.998712689686]),
            {
              "LC": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59500210086878, -62.99916998630626]),
            {
              "LC": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.555556367671294, -62.998663405386104]),
            {
              "LC": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.553753923213286, -62.99940378992015]),
            {
              "LC": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.570233415400786, -63.00213136040185]),
            {
              "LC": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.574954103267, -62.998858245241784]),
            {
              "LC": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57855899218301, -63.002988544206445]),
            {
              "LC": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.57014758471231, -63.01177322702808]),
            {
              "LC": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56821639422159, -63.01155899793075]),
            {
              "LC": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.59563929918985, -62.999851908279794]),
            {
              "LC": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.585511277949614, -63.00394310563741]),
            {
              "LC": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.56491191271524, -62.99934533919221]),
            {
              "LC": 0,
              "system:index": "11"
            })]);

          
//Map.addLayer(Lhills);
print(Dlichens);

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

//Map.setCenter(76.19136, -69.40349, 10);
Map.setCenter(-60.603707383906645, -63.00456647584465, 14);


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

//var newfc = lichens.merge(snow).merge(water).merge(garnet).merge(garnet2);
var newfc = Dlichens.merge(Dnotlichens).merge(h2o).merge(ice);

var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B9', 'B11', 'B12', 'QA60',  'NDSI'];

// Sample the input imagery to get a FeatureCollection of training data.
var training = S2_NDSI.select(bands).sampleRegions({
  collection: newfc,
  properties: ['LC'],
  scale: 30
});

print(training.size())
print(training.first());

var label = 'LC';
var trained_1 = ee.Classifier.smileGradientTreeBoost(10).train({
  features: training,
  classProperty: 'LC',
  inputProperties: bands
});

/*var trained_2 = ee.Classifier.smileRandomForest({
    numberOfTrees: 10,
    variablesPerSplit: 2,
    seed: 42
}).setOutputMode('PROBABILITY').train({
    features: training,
    classProperty: 'LC',
    inputProperties: bands
});*/

//print(trained_2);

// Classify the image with the same bands used for training.
var classified_1 = S2_NDSI.select(bands).classify(trained_1);
//var classified_2 = S2_NDSI.select(bands).classify(trained_2);

var zero_or_one = classified_1.select('classification').rename('zero_or_one');
//var probability = classified_2.select('classification').rename('probability');

S2_NDSI = S2_NDSI.addBands(zero_or_one);
//S2_NDSI = S2_NDSI.addBands(probability);

Map.addLayer(S2_NDSI, visualization, 'image');

//Map.addLayer(classified_1.clip(deception_island), {min: 0, max: 3, palette: ['yellow', 'grey', 'lightblue', 'white']}, 'north_Classification');
//var classified = classified_1.clip(deception_island);

Map.addLayer(classified_1.clip(south_part), {min: 0, max: 3, palette: ['yellow', 'grey', 'lightblue', 'white']}, 'south_Classification');
var classified = classified_1.clip(south_part);

//Map.addLayer(classified.clip(Lhills), {min: 0, max: 3, palette: ['yellow', 'grey', 'lightblue', 'white']}, 'Lhills_Classification');
//classified = classified.clip(Lhills);

//var MF = ee.Image(0).where()

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

/*var pixelChart = ui.Chart.image.byClass({
  image: ee.Image(1).addBands(classified),
  classBand: '', 
  region: south_part,
  scale: 30,
  reducer: ee.Reducer.count()
}).setOptions(options);*/

//print(pixelChart);

/*var areaChart = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(classified),
  classBand: 'classification', 
  region: Lhills,
  scale: 30,
  reducer: ee.Reducer.sum()
});
          
print(areaChart)*/


var validation_data = validation_lichen.merge(validation_notlichen).merge(validation_water).merge(validation_ice);

var validation = classified_1.clip(south_part).sampleRegions({
  collection: validation_data,
  properties: ['LC'],
  scale: 30
});

print(validation);

var testAccuracy = validation.errorMatrix('LC', 'classification');
print('validation error matrix :- ', testAccuracy);
print('overall accuracy :- ', testAccuracy.accuracy());

var all_points = ee.FeatureCollection("users/dhruvkakadiya3/Combined_SHP"),
    Lhills = 
    /* color: #ffe8d5 */
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
    rocks = ee.FeatureCollection("users/dhruvkakadiya3/BACKGROUND_SURFACES"),
    bare_rocks = 
    /* color: #08109f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.32381969861578, -69.3576425870826]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21356396596828, -69.41234683880627]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21317602417663, -69.41331446373486]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19991465764367, -69.4081196110076]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01956631553706, -69.37457379378253]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01848721308212, -69.37443556164988]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01467022258038, -69.37422152479932]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18978803915131, -69.40458800297327]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18981033465657, -69.4046147575796]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1937254253815, -69.40656338473995]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30179173941175, -69.37888128540015]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29601720354755, -69.37956798696239]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29483108266733, -69.3803617069499]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29447881368411, -69.38049102088046]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29784989408051, -69.3800183561688]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23978348016254, -69.37398519244347]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19452360447006, -69.38192685141966]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19054162722934, -69.37969730089294]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18396891227655, -69.37840862068849]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18463331833352, -69.3797686465098]),
            {
              "landcover": 2,
              "system:index": "19"
            })]),
    snow = 
    /* color: #2d2308 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.06404497371754, -69.43516236490113]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09923555599293, -69.43299149136028]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.07468797908864, -69.44818300331438]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.99726869808278, -69.4410708545335]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.96139147029957, -69.4341975592809]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04842378841481, -69.44884588027716]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04565962454616, -69.42124114243485]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04171141287624, -69.39552177250734]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09544142386257, -69.390386295089]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13698347708522, -69.384282547911]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.185391985386, -69.39509889709119]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.22418745657741, -69.4007164216026]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15723951956569, -69.41208844323995]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34452208182155, -69.38031369636327]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30836399443022, -69.36617401933637]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([76.25841053373686, -69.36441966621362]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([76.301840862106, -69.4134273068422]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([76.41908558256499, -69.41994519566197]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14992054350249, -69.39295554888076]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([76.33668812162749, -69.43665334988148]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([76.26871021635405, -69.44557513043182]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18837269193999, -69.46196225963101]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15129383451811, -69.42145368482589]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([76.139541220719, -69.36798055316906]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13975579744019, -69.36803347958832]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13986308580078, -69.36799945547656]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14071066384949, -69.36857029736038]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14080722337403, -69.36852871336241]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14080722337403, -69.36874797353967]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14067847734131, -69.36894454973492]),
            {
              "landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09930140389014, -69.3676196122187]),
            {
              "landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15861040962744, -69.36032952584257]),
            {
              "landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18375880135108, -69.3619329511357]),
            {
              "landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32304788340157, -69.35680448874277]),
            {
              "landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32305760640925, -69.35681323559099]),
            {
              "landcover": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32302173186368, -69.3568310838784]),
            {
              "landcover": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32296372909373, -69.35684455873461]),
            {
              "landcover": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32307962597693, -69.35687579026376]),
            {
              "landcover": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([76.323093037022, -69.35686243362738]),
            {
              "landcover": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32304408670748, -69.35685782381293]),
            {
              "landcover": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32304844529713, -69.35686668883987]),
            {
              "landcover": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34567366926296, -69.35149794035735]),
            {
              "landcover": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([76.3010651603461, -69.37921604618745]),
            {
              "landcover": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30116708428866, -69.37920258529788]),
            {
              "landcover": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30118049533374, -69.37920683610602]),
            {
              "landcover": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30118518919951, -69.37920695418401]),
            {
              "landcover": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30116775484092, -69.37918912439991]),
            {
              "landcover": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30114059747464, -69.37918053647402]),
            {
              "landcover": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30112718642957, -69.37918018223962]),
            {
              "landcover": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30112282783992, -69.37918018223962]),
            {
              "landcover": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30113188029534, -69.37917569526991]),
            {
              "landcover": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18884292280603, -69.37956339684837]),
            {
              "landcover": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([76.17989784188698, -69.3787387280064]),
            {
              "landcover": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([75.97849989257811, -69.40759598117555]),
            {
              "landcover": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([75.99497938476561, -69.39092566629087]),
            {
              "landcover": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04579115234374, -69.36311312015769]),
            {
              "landcover": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([76.16320753417968, -69.34519737390274]),
            {
              "landcover": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([76.49005079589843, -69.42570125856622]),
            {
              "landcover": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([76.40216017089843, -69.43872762787768]),
            {
              "landcover": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([76.16320753417968, -69.43462758505446]),
            {
              "landcover": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([76.10003614746093, -69.34858797983655]),
            {
              "landcover": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([76.43168592773436, -69.35657801649712]),
            {
              "landcover": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1883877082266, -69.40392357339137]),
            {
              "landcover": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18838301436082, -69.40389668245871]),
            {
              "landcover": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([76.06639051757811, -69.47053665390874]),
            {
              "landcover": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([76.06330061279296, -69.45993888027058]),
            {
              "landcover": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([76.10587263427733, -69.45162560131385]),
            {
              "landcover": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([76.10621595703124, -69.45825238828111]),
            {
              "landcover": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1755671533203, -69.43414517565601]),
            {
              "landcover": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1700739892578, -69.42292610483662]),
            {
              "landcover": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([76.17121420466037, -69.42759727027996]),
            {
              "landcover": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24821293068332, -69.41266383560598]),
            {
              "landcover": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([76.45077335548801, -69.38826372464902]),
            {
              "landcover": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([76.07002842140598, -69.37153837140647]),
            {
              "landcover": 1,
              "system:index": "73"
            })]),
    south_Lhills = 
    /* color: #ffe7e7 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[75.51458831990166, -69.58517564581098],
          [75.51458831990166, -69.59544224797061],
          [75.56179519856377, -69.59544224797061],
          [75.56179519856377, -69.58517564581098]]], null, false),
    s_lichens = 
    /* color: #fff175 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([75.53282823401507, -69.59088017805657]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53351459088161, -69.59093389820275]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5336617771013, -69.59092922149789]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5323112848623, -69.59050129866013]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53266734810903, -69.59041211639213]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53281935528668, -69.59037647981872]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53203045056017, -69.5903096010928]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53212365732344, -69.59032281316541]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53214176223429, -69.59029171216726]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53177597597988, -69.59038969184988]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53179810420426, -69.5904031377139]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53188762293013, -69.59037191991224]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52941253574541, -69.59020702322513]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52984504194906, -69.5902604563273]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5299741232579, -69.59021590926453]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53008174689462, -69.59022479530022]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53009951652935, -69.59028278828436]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5310891629615, -69.59034535215797]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53285478239313, -69.59005532640298]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53273441826359, -69.58996668937556]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53330103491798, -69.58998422780537]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53363425083268, -69.59008677864612]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53434017380832, -69.59094294639668]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5341027983105, -69.59091161246772]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53452645783103, -69.59084946700354]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53483021800197, -69.5908532083815]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53498682666502, -69.59082701872188]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53693489553315, -69.59049681883845]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5369976989165, -69.59047010967838]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53726055539995, -69.59045233780776]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53641331081282, -69.5905369787254]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53660542403351, -69.59051476395449]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53613699115071, -69.59075991831621]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5357712996266, -69.59093835570597]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53894613199125, -69.59052822654844]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59051910679945]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59050589484846]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53916976116787, -69.5905146638434]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53897314493398, -69.59042564423797]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53864708060163, -69.59041675828598]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53873626405138, -69.59039875252981]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53775561479958, -69.59165637893913]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([75.54013690604997, -69.59084012331998]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53140611625608, -69.58975642628943]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53141952730115, -69.5897432138658]),
            {
              "landcover": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53149529970582, -69.5897301183582]),
            {
              "landcover": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5314812181085, -69.58975210009852]),
            {
              "landcover": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52755322237665, -69.59003318941673]),
            {
              "landcover": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53828203393151, -69.5904122306324]),
            {
              "landcover": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53809427930047, -69.59038101284405]),
            {
              "landcover": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52768256602825, -69.59014475168368]),
            {
              "landcover": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52774516101408, -69.59008227982912]),
            {
              "landcover": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5275442346046, -69.59002444494251]),
            {
              "landcover": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52831591323421, -69.59013136485994]),
            {
              "landcover": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52832060709999, -69.59013580789588]),
            {
              "landcover": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52858349641434, -69.59016699380491]),
            {
              "landcover": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52859221359364, -69.59015822466698]),
            {
              "landcover": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52874849122007, -69.59018472712653]),
            {
              "landcover": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52872166912992, -69.59019373009689]),
            {
              "landcover": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174486138742, -69.58985051912966]),
            {
              "landcover": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174050279777, -69.58984584218712]),
            {
              "landcover": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174091064017, -69.58981473754189]),
            {
              "landcover": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53170972996037, -69.5898015251544]),
            {
              "landcover": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53146866642516, -69.5898237406685]),
            {
              "landcover": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53168698540742, -69.58976568389315]),
            {
              "landcover": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53210615688998, -69.58978357162621]),
            {
              "landcover": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5321551072045, -69.58976568225928]),
            {
              "landcover": 0,
              "system:index": "66"
            })]),
    validation_lichens = 
    /* color: #0bf9ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([75.53282823401507, -69.59088017805657]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53351459088161, -69.59093389820275]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5336617771013, -69.59092922149789]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5323112848623, -69.59050129866013]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53266734810903, -69.59041211639213]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53281935528668, -69.59037647981872]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53203045056017, -69.5903096010928]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53212365732344, -69.59032281316541]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53214176223429, -69.59029171216726]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53177597597988, -69.59038969184988]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53179810420426, -69.5904031377139]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53188762293013, -69.59037191991224]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52941253574541, -69.59020702322513]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52984504194906, -69.5902604563273]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5299741232579, -69.59021590926453]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53008174689462, -69.59022479530022]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53009951652935, -69.59028278828436]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5310891629615, -69.59034535215797]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53285478239313, -69.59005532640298]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53273441826359, -69.58996668937556]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53330103491798, -69.58998422780537]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53363425083268, -69.59008677864612]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53434017380832, -69.59094294639668]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5341027983105, -69.59091161246772]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53452645783103, -69.59084946700354]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53483021800197, -69.5908532083815]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53498682666502, -69.59082701872188]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53693489553315, -69.59049681883845]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5369976989165, -69.59047010967838]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53726055539995, -69.59045233780776]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53641331081282, -69.5905369787254]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53660542403351, -69.59051476395449]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53613699115071, -69.59075991831621]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5357712996266, -69.59093835570597]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53894613199125, -69.59052822654844]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59051910679945]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59050589484846]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53916976116787, -69.5905146638434]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53897314493398, -69.59042564423797]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53864708060163, -69.59041675828598]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53873626405138, -69.59039875252981]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53775561479958, -69.59165637893913]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([75.54013690604997, -69.59084012331998]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53140611625608, -69.58975642628943]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53141952730115, -69.5897432138658]),
            {
              "landcover": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53149529970582, -69.5897301183582]),
            {
              "landcover": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5314812181085, -69.58975210009852]),
            {
              "landcover": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52755322237665, -69.59003318941673]),
            {
              "landcover": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53828203393151, -69.5904122306324]),
            {
              "landcover": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53809427930047, -69.59038101284405]),
            {
              "landcover": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14102266355529, -69.37298639537049]),
            {
              "landcover": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14103180946208, -69.37294180123531]),
            {
              "landcover": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14109919996358, -69.37287939872068]),
            {
              "landcover": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14096508951283, -69.3728569573064]),
            {
              "landcover": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13597069231422, -69.37055599760009]),
            {
              "landcover": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13595761654527, -69.37054725632099]),
            {
              "landcover": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13591671285779, -69.37054276755465]),
            {
              "landcover": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1365954328231, -69.37076145556837]),
            {
              "landcover": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13582779031738, -69.37047593054504]),
            {
              "landcover": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13652789383183, -69.37020395150095]),
            {
              "landcover": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13692931993259, -69.37013260249529]),
            {
              "landcover": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13865498615755, -69.37011452895145]),
            {
              "landcover": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13866839720262, -69.37009243904392]),
            {
              "landcover": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1386281640674, -69.37009267529974]),
            {
              "landcover": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13867744965805, -69.37010118050735]),
            {
              "landcover": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13900343719425, -69.37037800494724]),
            {
              "landcover": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13912380132379, -69.37032898245867]),
            {
              "landcover": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13899874332847, -69.37033796007937]),
            {
              "landcover": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13889574488917, -69.37027079293811]),
            {
              "landcover": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13843172272959, -69.37038697204352]),
            {
              "landcover": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13909230551151, -69.37030196399903]),
            {
              "landcover": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13769679951216, -69.37056514881621]),
            {
              "landcover": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13769177037025, -69.3705650306909]),
            {
              "landcover": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13839219558577, -69.37048501741738]),
            {
              "landcover": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13838750171999, -69.37046280976341]),
            {
              "landcover": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01771483983217, -69.37512673791647]),
            {
              "landcover": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01750550234186, -69.37430189722078]),
            {
              "landcover": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01794288715963, -69.37424815888727]),
            {
              "landcover": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01779536566382, -69.37423067931809]),
            {
              "landcover": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01779603621607, -69.37420800309913]),
            {
              "landcover": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01776463239952, -69.37423049804883]),
            {
              "landcover": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01762646763054, -69.37419041732419]),
            {
              "landcover": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23694244167713, -69.39043037364551]),
            {
              "landcover": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24101358094175, -69.39039931653558]),
            {
              "landcover": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24104476162155, -69.3904127704342]),
            {
              "landcover": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2411027643915, -69.39043496905427]),
            {
              "landcover": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24112086930235, -69.39044830491419]),
            {
              "landcover": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2411383411833, -69.39048853606423]),
            {
              "landcover": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24125895375751, -69.39047962078874]),
            {
              "landcover": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24121407668576, -69.39050194342367]),
            {
              "landcover": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24121877055154, -69.39050631002002]),
            {
              "landcover": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24121005337224, -69.3905153972582]),
            {
              "landcover": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2415178745699, -69.3905954869813]),
            {
              "landcover": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24153966751814, -69.39060894075742]),
            {
              "landcover": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24161118018893, -69.39066287518236]),
            {
              "landcover": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24116727459696, -69.39074312540143]),
            {
              "landcover": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2416594599512, -69.39073037979837]),
            {
              "landcover": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24169969308642, -69.39073462833355]),
            {
              "landcover": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2418602668228, -69.39184973268173]),
            {
              "landcover": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24407706087096, -69.39139813823408]),
            {
              "landcover": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24402341669067, -69.3913759521132]),
            {
              "landcover": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24394773262985, -69.39146063555742]),
            {
              "landcover": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24412162669552, -69.3914784112667]),
            {
              "landcover": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24421114464737, -69.39146964314563]),
            {
              "landcover": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24588773614077, -69.39155873824593]),
            {
              "landcover": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24604799812941, -69.39152758349339]),
            {
              "landcover": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24611974722056, -69.39153206789236]),
            {
              "landcover": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24592282700914, -69.3915096451668]),
            {
              "landcover": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21351002266826, -69.41265920318175]),
            {
              "landcover": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21352812757911, -69.41265920318175]),
            {
              "landcover": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21147648094042, -69.41207075661153]),
            {
              "landcover": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20523410826752, -69.41067061417246]),
            {
              "landcover": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20319662340522, -69.40916774928515]),
            {
              "landcover": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20318797523427, -69.40911402902495]),
            {
              "landcover": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20250517389317, -69.40889564756773]),
            {
              "landcover": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19285562821007, -69.40424926021244]),
            {
              "landcover": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1928472463069, -69.4042313331989]),
            {
              "landcover": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19284255244112, -69.40421812381095]),
            {
              "landcover": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19179954769163, -69.40376315839532]),
            {
              "landcover": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19237905370053, -69.40394166676461]),
            {
              "landcover": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19268658467155, -69.40389711768238]),
            {
              "landcover": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19042105096598, -69.40351800828398]),
            {
              "landcover": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18816964448669, -69.40385693732057]),
            {
              "landcover": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18798661859681, -69.4038971588]),
            {
              "landcover": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18710396212714, -69.40435187874259]),
            {
              "landcover": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18717068207638, -69.40433395181451]),
            {
              "landcover": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2194315631772, -69.34835004485639]),
            {
              "landcover": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2332949274856, -69.37379802687764]),
            {
              "landcover": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23369678372357, -69.37378005838961]),
            {
              "landcover": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23330447315415, -69.37412349597054]),
            {
              "landcover": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24147291410786, -69.37488160083902]),
            {
              "landcover": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24146419692856, -69.3748771129747]),
            {
              "landcover": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24145078588349, -69.37486813724327]),
            {
              "landcover": 0,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24148733098131, -69.3748459341021]),
            {
              "landcover": 0,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24146855551821, -69.3748459341021]),
            {
              "landcover": 0,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24147324938399, -69.37483692232539]),
            {
              "landcover": 0,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24146419692856, -69.37483704042731]),
            {
              "landcover": 0,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24146889079434, -69.37482357680375]),
            {
              "landcover": 0,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24160717408184, -69.37479240540623]),
            {
              "landcover": 0,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24155788849119, -69.37479252350839]),
            {
              "landcover": 0,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24152670781139, -69.37479240540623]),
            {
              "landcover": 0,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24151296149019, -69.37478803562554]),
            {
              "landcover": 0,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24148680995229, -69.37479240540623]),
            {
              "landcover": 0,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24148647467617, -69.37478803562554]),
            {
              "landcover": 0,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24146870504144, -69.37477905985703]),
            {
              "landcover": 0,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24145093540672, -69.37477905985703]),
            {
              "landcover": 0,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24144221822742, -69.37478354774176]),
            {
              "landcover": 0,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2415981569765, -69.37471653737855]),
            {
              "landcover": 0,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2415669762967, -69.37470330988506]),
            {
              "landcover": 0,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24150427966097, -69.37470330988506]),
            {
              "landcover": 0,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24166521220187, -69.37468547637653]),
            {
              "landcover": 0,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2413040809606, -69.37469883161421]),
            {
              "landcover": 0,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24127256500468, -69.37468548600711]),
            {
              "landcover": 0,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24137046563372, -69.37467639209312]),
            {
              "landcover": 0,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24147350197401, -69.3746629393371]),
            {
              "landcover": 0,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24153184002009, -69.37465408161947]),
            {
              "landcover": 0,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2417453220475, -69.37499314863422]),
            {
              "landcover": 0,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24174129873398, -69.3750109818883]),
            {
              "landcover": 0,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24187019796575, -69.37508249756229]),
            {
              "landcover": 0,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24207965433077, -69.37511339253953]),
            {
              "landcover": 0,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24208468347267, -69.37510902282388]),
            {
              "landcover": 0,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24215107321277, -69.3752116672487]),
            {
              "landcover": 0,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23885983578765, -69.37387853868823]),
            {
              "landcover": 0,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23897617660367, -69.37389625475699]),
            {
              "landcover": 0,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2389765118798, -69.37390499467888]),
            {
              "landcover": 0,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23904323182904, -69.37387381440077]),
            {
              "landcover": 0,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23905194900834, -69.37387393250796]),
            {
              "landcover": 0,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23915021206936, -69.37391407535056]),
            {
              "landcover": 0,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23919010992846, -69.37390498111127]),
            {
              "landcover": 0,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([76.239323989464, -69.37397210779822]),
            {
              "landcover": 0,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23945402505025, -69.37380702714042]),
            {
              "landcover": 0,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24037191814702, -69.37394538766328]),
            {
              "landcover": 0,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24040309882682, -69.37393204158991]),
            {
              "landcover": 0,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24041215128224, -69.3739365296509]),
            {
              "landcover": 0,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24041684514802, -69.3739362934372]),
            {
              "landcover": 0,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24042556232732, -69.37393641154405]),
            {
              "landcover": 0,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24043461478274, -69.37393192348303]),
            {
              "landcover": 0,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24043863809626, -69.37393180537616]),
            {
              "landcover": 0,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24022932439061, -69.3739764456374]),
            {
              "landcover": 0,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2401180127165, -69.37399876778031]),
            {
              "landcover": 0,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24019344984504, -69.37398542173999]),
            {
              "landcover": 0,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24023368298026, -69.37397632753077]),
            {
              "landcover": 0,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23634565230753, -69.37459183402541]),
            {
              "landcover": 0,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23625211026814, -69.37456514267052]),
            {
              "landcover": 0,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23631447162774, -69.37454719094423]),
            {
              "landcover": 0,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23633659985211, -69.3745516788772]),
            {
              "landcover": 0,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23646165784743, -69.37453833317903]),
            {
              "landcover": 0,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23630503384122, -69.37472118134738]),
            {
              "landcover": 0,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23631895024565, -69.37466761746384]),
            {
              "landcover": 0,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29868825375755, -69.37849805653782]),
            {
              "landcover": 0,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29867920130212, -69.37849782037408]),
            {
              "landcover": 0,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29867048412282, -69.37849345134424]),
            {
              "landcover": 0,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29856319576223, -69.37845790866326]),
            {
              "landcover": 0,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29966895229084, -69.37901501900181]),
            {
              "landcover": 0,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29959753847582, -69.3790106500768]),
            {
              "landcover": 0,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29948220348818, -69.37903745400826]),
            {
              "landcover": 0,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30202384997662, -69.3791845827183]),
            {
              "landcover": 0,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30202384997662, -69.3791754907016]),
            {
              "landcover": 0,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30200540978964, -69.37917560877976]),
            {
              "landcover": 0,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30199702788647, -69.37917584493609]),
            {
              "landcover": 0,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30198764015492, -69.37917572685792]),
            {
              "landcover": 0,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30197892297562, -69.37917112180911]),
            {
              "landcover": 0,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30211312227698, -69.37914013269085]),
            {
              "landcover": 0,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([76.3021258627698, -69.37913104065541]),
            {
              "landcover": 0,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30191180877706, -69.37914013269085]),
            {
              "landcover": 0,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30182247220529, -69.37912690791076]),
            {
              "landcover": 0,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30186773448241, -69.37910004755469]),
            {
              "landcover": 0,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30167595653785, -69.37909096668808]),
            {
              "landcover": 0,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30164477585805, -69.37910442764733]),
            {
              "landcover": 0,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30157295651773, -69.37909115798789]),
            {
              "landcover": 0,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30156893320421, -69.37909103990927]),
            {
              "landcover": 0,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30155082829336, -69.37907311416133]),
            {
              "landcover": 0,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30147941447834, -69.3790729960826]),
            {
              "landcover": 0,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30150590129236, -69.37903721819917]),
            {
              "landcover": 0,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30140371304925, -69.37886794944923]),
            {
              "landcover": 0,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30131060761117, -69.37889926805107]),
            {
              "landcover": 0,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30119886094049, -69.37891282480861]),
            {
              "landcover": 0,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30132356044874, -69.37892155452286]),
            {
              "landcover": 0,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30122516031958, -69.37894386914238]),
            {
              "landcover": 0,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30129221554495, -69.3789572121141]),
            {
              "landcover": 0,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30129245069452, -69.37897047226139]),
            {
              "landcover": 0,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30129245069452, -69.37897484119455]),
            {
              "landcover": 0,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30127903964944, -69.3789841694543]),
            {
              "landcover": 0,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30127903964944, -69.37899278923503]),
            {
              "landcover": 0,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30133234855361, -69.3789794462853]),
            {
              "landcover": 0,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30142589059301, -69.37897082649924]),
            {
              "landcover": 0,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30144840487421, -69.37900635559772]),
            {
              "landcover": 0,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30124756730883, -69.37904651808206]),
            {
              "landcover": 0,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29665011076001, -69.37841336241145]),
            {
              "landcover": 0,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29663636443881, -69.37843565154135]),
            {
              "landcover": 0,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29665916321544, -69.37847568137536]),
            {
              "landcover": 0,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29665513990192, -69.378471076177]),
            {
              "landcover": 0,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29665044603614, -69.378471076177]),
            {
              "landcover": 0,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29668598530559, -69.37850675811389]),
            {
              "landcover": 0,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29657031504182, -69.37851596849438]),
            {
              "landcover": 0,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29675700207613, -69.37854265495923]),
            {
              "landcover": 0,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29670838703774, -69.37859607095557]),
            {
              "landcover": 0,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29672213335894, -69.37859607095557]),
            {
              "landcover": 0,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29663630267046, -69.37863179076604]),
            {
              "landcover": 0,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29665910144709, -69.37865422617126]),
            {
              "landcover": 0,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29688677061549, -69.3787121195354]),
            {
              "landcover": 0,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2968374181921, -69.37882351194648]),
            {
              "landcover": 0,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29694872986622, -69.37884146011291]),
            {
              "landcover": 0,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29702919613666, -69.37882363002656]),
            {
              "landcover": 0,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29693086670555, -69.37890380436136]),
            {
              "landcover": 0,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29688258694328, -69.37892600332447]),
            {
              "landcover": 0,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29687789307751, -69.37892576716541]),
            {
              "landcover": 0,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29686012344278, -69.37893497736691]),
            {
              "landcover": 0,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29690505044378, -69.37893485928743]),
            {
              "landcover": 0,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29697579370655, -69.37892151630184]),
            {
              "landcover": 0,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29700228052057, -69.3789170292783]),
            {
              "landcover": 0,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2967795714812, -69.37895703968626]),
            {
              "landcover": 0,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18786613343477, -69.37823034282914]),
            {
              "landcover": 0,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18790203519961, -69.37846240995819]),
            {
              "landcover": 0,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18805791094168, -69.37852025595255]),
            {
              "landcover": 0,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18784366709322, -69.37868971525124]),
            {
              "landcover": 0,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18805817427992, -69.37889949542125]),
            {
              "landcover": 0,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18850863286659, -69.37913112348693]),
            {
              "landcover": 0,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18862404026203, -69.37926490555287]),
            {
              "landcover": 0,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18913255218575, -69.37969743746335]),
            {
              "landcover": 0,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18158766003607, -69.37809240972415]),
            {
              "landcover": 0,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18010277032504, -69.37876107153704]),
            {
              "landcover": 0,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18329051100714, -69.37893498649032]),
            {
              "landcover": 0,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1836922836453, -69.37908205776122]),
            {
              "landcover": 0,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18547593765031, -69.38182890368148]),
            {
              "landcover": 0,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18575255468815, -69.38165044704611]),
            {
              "landcover": 0,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18564061787797, -69.38158378561525]),
            {
              "landcover": 0,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1854670056929, -69.38074987562189]),
            {
              "landcover": 0,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18530638272333, -69.38064286116818]),
            {
              "landcover": 0,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18461066322644, -69.38071871737111]),
            {
              "landcover": 0,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18458384113629, -69.38073642782062]),
            {
              "landcover": 0,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18427231839485, -69.38079437450158]),
            {
              "landcover": 0,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18446357253968, -69.38051362929617]),
            {
              "landcover": 0,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18385297076091, -69.38032186632944]),
            {
              "landcover": 0,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1843520870973, -69.38024583800117]),
            {
              "landcover": 0,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18436089005206, -69.38019692580568]),
            {
              "landcover": 0,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18494999974892, -69.38017436618516]),
            {
              "landcover": 0,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18478490200296, -69.38013457222551]),
            {
              "landcover": 0,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18462390633509, -69.38013891221424]),
            {
              "landcover": 0,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18433902538966, -69.38012568804679]),
            {
              "landcover": 0,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1814136223637, -69.37906437543455]),
            {
              "landcover": 0,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18072532851936, -69.37901962070578]),
            {
              "landcover": 0,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52768256602825, -69.59014475168368]),
            {
              "landcover": 0,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52774516101408, -69.59008227982912]),
            {
              "landcover": 0,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5275442346046, -69.59002444494251]),
            {
              "landcover": 0,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52831591323421, -69.59013136485994]),
            {
              "landcover": 0,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52832060709999, -69.59013580789588]),
            {
              "landcover": 0,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52858349641434, -69.59016699380491]),
            {
              "landcover": 0,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52859221359364, -69.59015822466698]),
            {
              "landcover": 0,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52874849122007, -69.59018472712653]),
            {
              "landcover": 0,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52872166912992, -69.59019373009689]),
            {
              "landcover": 0,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174486138742, -69.58985051912966]),
            {
              "landcover": 0,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174050279777, -69.58984584218712]),
            {
              "landcover": 0,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174091064017, -69.58981473754189]),
            {
              "landcover": 0,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53170972996037, -69.5898015251544]),
            {
              "landcover": 0,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53146866642516, -69.5898237406685]),
            {
              "landcover": 0,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53168698540742, -69.58976568389315]),
            {
              "landcover": 0,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53210615688998, -69.58978357162621]),
            {
              "landcover": 0,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5321551072045, -69.58976568225928]),
            {
              "landcover": 0,
              "system:index": "298"
            })]),
    validation_snow = 
    /* color: #ffc62d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.06404497371754, -69.43516236490113]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09923555599293, -69.43299149136028]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.0561485503777, -69.45203945530082]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.99726869808278, -69.4410708545335]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.96139147029957, -69.4341975592809]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([75.959846517907, -69.4524612127303]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04565962454616, -69.42124114243485]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.04171141287624, -69.39552177250734]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09544142386257, -69.390386295089]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13698347708522, -69.384282547911]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.185391985386, -69.39509889709119]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.22418745657741, -69.4007164216026]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15723951956569, -69.41208844323995]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19122847220241, -69.37130434300249]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34452208182155, -69.38031369636327]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30836399443022, -69.36617401933637]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([76.25841053373686, -69.36441966621362]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([76.301840862106, -69.4134273068422]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([76.41908558256499, -69.41994519566197]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14992054350249, -69.39295554888076]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([76.33668812162749, -69.43665334988148]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([76.26871021635405, -69.44557513043182]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18837269193999, -69.46196225963101]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15129383451811, -69.42145368482589]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([76.139541220719, -69.36798055316906]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13975579744019, -69.36803347958832]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13986308580078, -69.36799945547656]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14071066384949, -69.36857029736038]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14080722337403, -69.36852871336241]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14080722337403, -69.36874797353967]),
            {
              "landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14067847734131, -69.36894454973492]),
            {
              "landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([76.09930140389014, -69.3676196122187]),
            {
              "landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([76.12376315010596, -69.36399000156506]),
            {
              "landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([76.15861040962744, -69.36032952584257]),
            {
              "landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18375880135108, -69.3619329511357]),
            {
              "landcover": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32304788340157, -69.35680448874277]),
            {
              "landcover": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32305760640925, -69.35681323559099]),
            {
              "landcover": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32302173186368, -69.3568310838784]),
            {
              "landcover": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32296372909373, -69.35684455873461]),
            {
              "landcover": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32307962597693, -69.35687579026376]),
            {
              "landcover": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([76.323093037022, -69.35686243362738]),
            {
              "landcover": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32304408670748, -69.35685782381293]),
            {
              "landcover": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32304844529713, -69.35686668883987]),
            {
              "landcover": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([76.32310175061119, -69.356897871242]),
            {
              "landcover": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([76.34567366926296, -69.35149794035735]),
            {
              "landcover": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23896641655878, -69.37409705693662]),
            {
              "landcover": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24041680097343, -69.3738916757036]),
            {
              "landcover": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23754965623473, -69.37472542711726]),
            {
              "landcover": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24081799166551, -69.37432847379533]),
            {
              "landcover": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24070198612561, -69.37435079557386]),
            {
              "landcover": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([76.3010651603461, -69.37921604618745]),
            {
              "landcover": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30116708428866, -69.37920258529788]),
            {
              "landcover": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30118049533374, -69.37920683610602]),
            {
              "landcover": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30118518919951, -69.37920695418401]),
            {
              "landcover": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30116775484092, -69.37918912439991]),
            {
              "landcover": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30114059747464, -69.37918053647402]),
            {
              "landcover": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30112718642957, -69.37918018223962]),
            {
              "landcover": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30112282783992, -69.37918018223962]),
            {
              "landcover": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30113188029534, -69.37917569526991]),
            {
              "landcover": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30113657416112, -69.37917569526991]),
            {
              "landcover": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30120765265097, -69.37914472479693]),
            {
              "landcover": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30127847856566, -69.37883691183892]),
            {
              "landcover": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19215550469131, -69.37993372631747]),
            {
              "landcover": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1920220149281, -69.37986686798662]),
            {
              "landcover": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19171003232364, -69.37969721210418]),
            {
              "landcover": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18884292280603, -69.37956339684837]),
            {
              "landcover": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18901265121676, -69.37964396867427]),
            {
              "landcover": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([76.17989784188698, -69.3787387280064]),
            {
              "landcover": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18907888872221, -69.38156591771599]),
            {
              "landcover": 1,
              "system:index": "68"
            })]),
    validation_rocks = 
    /* color: #08109f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.32381969861578, -69.3576425870826]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21356396596828, -69.41234683880627]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21317602417663, -69.41331446373486]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19991465764367, -69.4081196110076]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01956631553706, -69.37457379378253]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01848721308212, -69.37443556164988]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01467022258038, -69.37422152479932]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18978803915131, -69.40458800297327]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18981033465657, -69.4046147575796]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1937254253815, -69.40656338473995]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30179173941175, -69.37888128540015]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29601720354755, -69.37956798696239]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29483108266733, -69.3803617069499]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29447881368411, -69.38049102088046]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29784989408051, -69.3800183561688]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23978348016254, -69.37398519244347]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19452360447006, -69.38192685141966]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19054162722934, -69.37969730089294]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18396891227655, -69.37840862068849]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18463331833352, -69.3797686465098]),
            {
              "landcover": 2,
              "system:index": "19"
            })]),
    lichens = 
    /* color: #d5ffbe */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([76.1365954328231, -69.37076145556837]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13582779031738, -69.37047593054504]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13865498615755, -69.37011452895145]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([76.01771483983217, -69.37512673791647]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24116727459696, -69.39074312540143]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2418602668228, -69.39184973268173]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24588773614077, -69.39155873824593]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21351002266826, -69.41265920318175]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([76.21352812757911, -69.41265920318175]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20319662340522, -69.40916774928515]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20318797523427, -69.40911402902495]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19285562821007, -69.40424926021244]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18710396212714, -69.40435187874259]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2332949274856, -69.37379802687764]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2417453220475, -69.37499314863422]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24215107321277, -69.3752116672487]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23885983578765, -69.37387853868823]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29868825375755, -69.37849805653782]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([76.30202384997662, -69.3791845827183]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29663630267046, -69.37863179076604]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18850863286659, -69.37913112348693]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1836922836453, -69.37908205776122]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18547593765031, -69.38182890368148]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18427231839485, -69.38079437450158]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53282823401507, -69.59088017805657]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53351459088161, -69.59093389820275]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5336617771013, -69.59092922149789]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5323112848623, -69.59050129866013]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53266734810903, -69.59041211639213]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53281935528668, -69.59037647981872]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53203045056017, -69.5903096010928]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53212365732344, -69.59032281316541]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53214176223429, -69.59029171216726]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53177597597988, -69.59038969184988]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53179810420426, -69.5904031377139]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53188762293013, -69.59037191991224]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52941253574541, -69.59020702322513]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52984504194906, -69.5902604563273]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5299741232579, -69.59021590926453]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53008174689462, -69.59022479530022]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53009951652935, -69.59028278828436]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5310891629615, -69.59034535215797]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53285478239313, -69.59005532640298]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53273441826359, -69.58996668937556]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53330103491798, -69.58998422780537]),
            {
              "landcover": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53363425083268, -69.59008677864612]),
            {
              "landcover": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53434017380832, -69.59094294639668]),
            {
              "landcover": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5341027983105, -69.59091161246772]),
            {
              "landcover": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53452645783103, -69.59084946700354]),
            {
              "landcover": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53483021800197, -69.5908532083815]),
            {
              "landcover": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59051910679945]),
            {
              "landcover": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59050589484846]),
            {
              "landcover": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53916976116787, -69.5905146638434]),
            {
              "landcover": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53897314493398, -69.59042564423797]),
            {
              "landcover": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53864708060163, -69.59041675828598]),
            {
              "landcover": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53873626405138, -69.59039875252981]),
            {
              "landcover": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53775561479958, -69.59165637893913]),
            {
              "landcover": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([75.54013690604997, -69.59084012331998]),
            {
              "landcover": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53140611625608, -69.58975642628943]),
            {
              "landcover": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53141952730115, -69.5897432138658]),
            {
              "landcover": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53149529970582, -69.5897301183582]),
            {
              "landcover": 0,
              "system:index": "60"
            })]),
    s_l_lichens = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([75.53282823401507, -69.59088017805657]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53351459088161, -69.59093389820275]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5323112848623, -69.59050129866013]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53266734810903, -69.59041211639213]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53281935528668, -69.59037647981872]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53203045056017, -69.5903096010928]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53212365732344, -69.59032281316541]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53177597597988, -69.59038969184988]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53179810420426, -69.5904031377139]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53188762293013, -69.59037191991224]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52941253574541, -69.59020702322513]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52984504194906, -69.5902604563273]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5299741232579, -69.59021590926453]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53008174689462, -69.59022479530022]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53009951652935, -69.59028278828436]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5310891629615, -69.59034535215797]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53285478239313, -69.59005532640298]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53273441826359, -69.58996668937556]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53330103491798, -69.58998422780537]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53363425083268, -69.59008677864612]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53434017380832, -69.59094294639668]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5341027983105, -69.59091161246772]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53452645783103, -69.59084946700354]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53483021800197, -69.5908532083815]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53498682666502, -69.59082701872188]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53693489553315, -69.59049681883845]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5369976989165, -69.59047010967838]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53726055539995, -69.59045233780776]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53641331081282, -69.5905369787254]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53660542403351, -69.59051476395449]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53613699115071, -69.59075991831621]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5357712996266, -69.59093835570597]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53894613199125, -69.59052822654844]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59051910679945]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53895484917055, -69.59050589484846]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53916976116787, -69.5905146638434]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53897314493398, -69.59042564423797]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53864708060163, -69.59041675828598]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53775561479958, -69.59165637893913]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([75.54013690604997, -69.59084012331998]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53140611625608, -69.58975642628943]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53141952730115, -69.5897432138658]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53149529970582, -69.5897301183582]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5314812181085, -69.58975210009852]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52755322237665, -69.59003318941673]),
            {
              "landcover": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53828203393151, -69.5904122306324]),
            {
              "landcover": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53809427930047, -69.59038101284405]),
            {
              "landcover": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52768256602825, -69.59014475168368]),
            {
              "landcover": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52774516101408, -69.59008227982912]),
            {
              "landcover": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5275442346046, -69.59002444494251]),
            {
              "landcover": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52831591323421, -69.59013136485994]),
            {
              "landcover": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52832060709999, -69.59013580789588]),
            {
              "landcover": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52858349641434, -69.59016699380491]),
            {
              "landcover": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52874849122007, -69.59018472712653]),
            {
              "landcover": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([75.52872166912992, -69.59019373009689]),
            {
              "landcover": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174486138742, -69.58985051912966]),
            {
              "landcover": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174050279777, -69.58984584218712]),
            {
              "landcover": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53174091064017, -69.58981473754189]),
            {
              "landcover": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53170972996037, -69.5898015251544]),
            {
              "landcover": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53146866642516, -69.5898237406685]),
            {
              "landcover": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53168698540742, -69.58976568389315]),
            {
              "landcover": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53210615688998, -69.58978357162621]),
            {
              "landcover": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([75.5321551072045, -69.58976568225928]),
            {
              "landcover": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1365954328231, -69.37076145556837]),
            {
              "landcover": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13865498615755, -69.37011452895145]),
            {
              "landcover": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24116727459696, -69.39074312540143]),
            {
              "landcover": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2418602668228, -69.39184973268173]),
            {
              "landcover": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24588773614077, -69.39155873824593]),
            {
              "landcover": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18710396212714, -69.40435187874259]),
            {
              "landcover": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([76.2417453220475, -69.37499314863422]),
            {
              "landcover": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29868825375755, -69.37849805653782]),
            {
              "landcover": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([76.29663630267046, -69.37863179076604]),
            {
              "landcover": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18850863286659, -69.37913112348693]),
            {
              "landcover": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53282823401507, -69.59088017805657]),
            {
              "landcover": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([75.53351459088161, -69.59093389820275]),
            {
              "landcover": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([76.20523448487283, -69.41067026940009]),
            {
              "landcover": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1928558033684, -69.40424907388115]),
            {
              "landcover": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1410233310449, -69.37298657690452]),
            {
              "landcover": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([76.14096525859914, -69.37285693513907]),
            {
              "landcover": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13595856614683, -69.37054731893903]),
            {
              "landcover": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([76.13597130663965, -69.37055617834349]),
            {
              "landcover": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23631422240841, -69.37454714918792]),
            {
              "landcover": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23625219632494, -69.37456498281082]),
            {
              "landcover": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([76.19154087360864, -69.40360713620011]),
            {
              "landcover": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([76.1913842996574, -69.40355347145544]),
            {
              "landcover": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18329096149894, -69.37893497084403]),
            {
              "landcover": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([76.18141355575055, -69.3790641854361]),
            {
              "landcover": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([76.23932437347054, -69.37397161015336]),
            {
              "landcover": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([76.24036507056832, -69.37394420938995]),
            {
              "landcover": 0,
              "system:index": "88"
            })]);



///// Main Code /////
 
//Map.addLayer(Lhills);


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
  Map.setCenter(76.19136, -69.40349, 11);
  
  
  
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
  var newfc = s_l_lichens.merge(snow).merge(bare_rocks);
  
  var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B9', 'B11', 'B12', 'QA60',  'NDSI'];
  
  // Sample the input imagery to get a FeatureCollection of training data.
  var training = S2_NDSI.select(bands).sampleRegions({
    collection: newfc,
    properties: ['landcover'],
    scale: 30
  });
  
  print(training.size())
  print(training.first());
  
  var label = 'landcover';
  
  var trained_1 = ee.Classifier.smileRandomForest(20).train({
    features: training,
    classProperty: 'landcover',
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
  
  Map.addLayer(all_points, {color: 'green'}, 'all_points_lichens')
  
  //Map.addLayer(classified_1.clip(deception_island), {min: 0, max: 3, palette: ['yellow', 'grey', 'lightblue', 'white']}, 'north_Classification');
  //var classified = classified_1.clip(deception_island);
  
  Map.addLayer(classified_1.clip(Lhills), {min: 0, max: 2, palette: ['green', 'white', 'red']}, 'classification_by_south');
  var classified = classified_1.clip(Lhills);
  
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
  
  var validation_data = validation_lichens.merge(validation_snow).merge(validation_rocks);
  
  var validation = classified_1.clip(Lhills).sampleRegions({
    collection: validation_data,
    properties: ['landcover'],
    scale: 30
  });
  
  print(validation);
  
  var testAccuracy = validation.errorMatrix('landcover', 'classification');
  print('validation error matrix :- ', testAccuracy);
  print('overall accuracy :- ', testAccuracy.accuracy());
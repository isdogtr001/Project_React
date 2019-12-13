const Jimp = require("jimp");

const ORIGINAL_IMAGE =
  "http://www.defence.gov.au/ADFA/Images/news_events/whiteRibbon.jpg";

const LOGO = "https://www.pngtube.com/myfile/detail/375-3754180_scorch-mark-png-png-download-watermark-credit-union.png";

const LOGO_MARGIN_PERCENTAGE = 5;

const FILENAME = "water.jpg";

const main = async () => {
  const [image, logo] = await Promise.all([
    Jimp.read(ORIGINAL_IMAGE),
    Jimp.read(LOGO)
  ]);

  logo.resize(image.bitmap.width / 10, Jimp.AUTO);

  const xMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;
  const yMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;

  const X = image.bitmap.width - logo.bitmap.width - xMargin;
  const Y = image.bitmap.height - logo.bitmap.height - yMargin;

  return image.composite(logo, X, Y, [
    {
      mode: Jimp.BLEND_SCREEN,
      opacitySource: 0.1,
      opacityDest: 1
    }
  ]);
};

main().then(image => image.write(FILENAME));
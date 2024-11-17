class ToneDetailsInfo {
  static INFO_10 =
    `<ul>` +
    `  <li><mark>Dark theme: </mark>Not used in most Scheme Variants.</li>` +
    `  <li><mark>Light theme: </mark>Used as the <code>on-color</code> style.</li>` +
    `</ul>`;

  static INFO_20 =
    `<ul>` +
    `  <li><mark>Dark theme: </mark>Used as the <code>on-color</code> style.</li>` +
    `  <li><mark>Light theme: </mark>Used as the <code>on-color</code> style.</li>` +
    `</ul>`;

  static INFO_30 =
    `<ul>` +
    `  <li><mark>Dark theme: </mark>The default theme style in most Scheme Variants.</li>` +
    `  <li><mark>Light theme: </mark>Used as the <code>on-color</code> style.</li>` +
    `</ul>`;

  static INFO_40 =
    `<ul>` +
    `  <li><mark>Dark theme: </mark>Used as the <code>on-color</code> style.</li>` +
    `  <li><mark>Light theme: </mark>Used as the <code>on-color</code> style.</li>` +
    `</ul>`;
  static INFO_50 =
    `<ul>` +
    `  <li><mark>Dark theme: </mark>Not used as a style in most Scheme Variants.</li>` +
    `  <li><mark>Light theme: </mark>Not used as a style in most Scheme Variants.</li>` +
    `</ul>`;
}

export default class ToneDetails {
  static info = [
    {
      title: "Primary",
      name: "primary",
      tones: [
        { tone: 10, info: ToneDetailsInfo.INFO_10 },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: ToneDetailsInfo.INFO_30 },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: ToneDetailsInfo.INFO_50 },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        {
          tone: 90,
          info:
            "<ul>" +
            "<li><mark>Dark theme:</mark> Used as the <code>on-color</code> style.</li>" +
            "<li><mark>Light theme:</mark> The default style in most Scheme Variants.</li>" +
            "</ul>"
        }
      ]
    },
    {
      title: "Secondary",
      name: "secondary",
      tones: [
        {
          tone: 10,
          info: ToneDetails.INFO_10
        },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: ToneDetailsInfo.INFO_30 },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: ToneDetailsInfo.INFO_50 },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        {
          tone: 90,
          info:
            "<ul>" +
            "<li><mark>Dark theme:</mark> Used as the <code>on-color</code> style.</li>" +
            "<li><mark>Light theme:</mark> The default style in most Scheme Variants.</li>" +
            "</ul>"
        }
      ]
    },
    {
      title: "Tertiary",
      name: "tertiary",
      tones: [
        { tone: 10, info: ToneDetailsInfo.INFO_10 },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: ToneDetailsInfo.INFO_30 },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: ToneDetailsInfo.INFO_50 },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        {
          tone: 90,
          info:
            "<ul>" +
            "<li><mark>Dark theme:</mark> Used as the <code>on-color</code> style.</li>" +
            "<li><mark>Light theme:</mark> The default style in most Scheme Variants.</li>" +
            "</ul>"
        }
      ]
    },
    {
      title: "Neutral",
      name: "neutral",
      tones: [
        { tone: 10, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 90, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" }
      ]
    },
    {
      title: "Neutral Variant",
      name: "neutralVariant",
      tones: [
        { tone: 10, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 90, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" }
      ]
    },
    {
      title: "Success",
      name: "success",
      tones: [
        { tone: 10, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 90, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" }
      ]
    },
    {
      title: "Info",
      name: "info",
      tones: [
        { tone: 10, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 90, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" }
      ]
    },
    {
      title: "Warning",
      name: "warning",
      tones: [
        { tone: 10, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 90, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" }
      ]
    },
    {
      title: "Error",
      name: "error",
      tones: [
        { tone: 10, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 20, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 30, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 40, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 50, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 60, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 70, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 80, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" },
        { tone: 90, info: "<ul><li>Dark: dark info</li><li>Light: light info</li></ul>" }
      ]
    }
  ];

  static getInfoByName(name) {
    console.log("ToneDetails ::: getInfoByName");
    console.log(" - name: ", name);
    const palette = this.info.find((p) => p.name === name);
    return palette;
  }

  static getInfoForTone(name, tone) {
    console.log("ToneDetails ::: getInfoForTone");
    console.log(" - name: ", name);
    console.log(" - tone: ", tone);
    const palette = ToneDetails.getInfoByName(name);
    const toneInfo = palette.tones.find((t) => t.tone === tone);
    return toneInfo;
  }
}

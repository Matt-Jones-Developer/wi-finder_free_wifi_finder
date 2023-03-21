const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const mapStyles = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      { invert_lightness: isDarkMode },
      { saturation: isDarkMode ? -100 : 0 },
    ],
  },
];

const map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12,
  styles: mapStyles,
});

// You can use this method to update the map style when the user's preference changes
function updateMapStyle() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const updatedStyles = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { invert_lightness: isDarkMode },
        { saturation: isDarkMode ? -100 : 0 },
      ],
    },
  ];
  map.setOptions({ styles: updatedStyles });
}

// Listen for changes to the user's color scheme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateMapStyle);

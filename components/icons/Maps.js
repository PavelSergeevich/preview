function Maps() {
  const link =
    "https://www.google.com/maps/place/%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,+31,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@49.9871313,36.2283082,17z/data=!3m1!4b1!4m5!3m4!1s0x4127a0f6bd87b4a7:0x63cf98bac6d949f2!8m2!3d49.9871313!4d36.2304969";
  const linkPage = "https://g.page/r/CSXGcrxfaK9xEAE";  
  return (
    <a href={linkPage} target="_blank" rel="noreferrer" className="fa map-icon">
      <svg
        version="1.2"
        baseProfile="tiny-ps"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42 56"
        width="35"
        height="35"
        aria-label="Maps"
      >
        <g id="home">
          <g id="down">
            <path
              fill="#ffffff"
              fillRule="evenodd"
              className="shp0"
              d="M21 0C32.6 0 42 9.4 42 21C42 36.74 28.06 56 21 56C12.21 56 0 36.74 0 21C0 9.4 9.4 0 21 0ZM10.5 21C10.5 26.8 15.2 31.5 21 31.5C26.8 31.5 31.5 26.8 31.5 21C31.5 15.2 26.8 10.5 21 10.5C15.2 10.5 10.5 15.2 10.5 21Z"
            />
          </g>
        </g>
      </svg>
    </a>
  );
}

export default Maps;

function HomeArrow({ props }) {
  
  return (
    <a
      className="nav-link"
      aria-current="page"
      href={`${props}`}
    >
      <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 64" width="37" height="64">
	<title>Home</title>	
	<g id="Stretching">
		<path fill="#ffffff" className="shp0" d="M27.9 62.41L1.52 35.78C-0.56 33.68 -0.56 30.28 1.52 28.18L27.9 1.55C29.98 -0.55 33.36 -0.55 35.44 1.55C37.52 3.65 37.52 7.06 35.44 9.16L12.83 31.98L35.44 54.8C37.52 56.9 37.52 60.31 35.44 62.41C33.36 64.51 29.98 64.51 27.9 62.41Z" />
	</g>
</svg>
    </a>
  );
}

export default HomeArrow;

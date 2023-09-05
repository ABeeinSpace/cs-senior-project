import react from "react";

export default function Home() {
  return (
    <div>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="./resources/app.css" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossOrigin="anonymous"
		/>
		<link rel="stylesheet" type="text/css" href="index.css" />
		<title>Turing Test-Inator!</title>
		<nav className="navbar navbar-expand-md navbar-dark bg-body-tertiary py-0 sticky-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#" id="black">
					{" "}
					Turing Test-Inator!
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-item nav-link" id="black" href="index.html">
							Home
						</a>
						<a className="nav-item nav-link" id="black" href="game.html">
							Game
						</a>
						<a className="nav-item nav-link" id="black" href="write.html">
							Write
						</a>
					</div>
				</div>
			</div>
		</nav>
		<div id="container">
			<h1>Home Page</h1>
			<p />
			<p>
				This page is under construction. Please come back later for a super cool
				AI-related project!
			</p>
		</div>
	</div>

  )
}

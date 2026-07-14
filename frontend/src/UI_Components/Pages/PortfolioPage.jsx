export default function PortfolioPage(){


    async function fetchGitHubRepos(){
        const response = await fetch("http://localhost:5000/github-repos");
        const data = await response.json();

        console.log(data);
    }
    // const setInterval = setInterval(() => {
    //     console.log("Message displays every 2 seconds");
    // }, 2000);
    // fetchGitHubRepos();

    return(
        <div className = "portfolio-container">
                <div className = "card project-card">
                    <h4>Project 1</h4>
                </div>
                <div className = "card project-card">
                    <h4>Project 2</h4>
                </div>
                <div className = "card project-card">
                    <h4>Project 3</h4>
                </div>
        </div>
    );
}

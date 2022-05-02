import { HomeWrapper, HomeContainer, About, Github, Avatar } from '../styles';
import data from '../data/about.json';

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <About>
                    <Avatar>
                        <img src={`/img/avatar.png`} alt=""></img>
                    </Avatar>
                    <h1>{data.name}</h1>
                    <h2>{data.title}</h2>
                    <h2>{data.title2}</h2>
                    <p>{data.descriptionBackend}</p>
                    <p>{data.descriptionBlockchain}</p>
                    <p>{data.descriptionFullstack}</p>
                    <p>{data.descriptionGithub}</p>
                    <Github>
                        <a
                            href="https://github.com/tjean1"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <img src={`/logos/github.svg`} alt="github" />
                        </a>
                    </Github>
                </About>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home;

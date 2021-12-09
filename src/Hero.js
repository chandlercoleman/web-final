
import Picture from './pinksky.jpeg';
import NavAbout from './top-bar.svg';
import FullNav from './full-nav.svg';
import Collection from './contact.svg';
import Chandler from './name.svg';

const Hero = () => {
    return (
        <>
            <form className="form"> 
                <input className="input" type="search"  placeholder="Search..."></input>
                <button>Search</button>
            </form>
            <img className= "about-nav" src={NavAbout} />
            <img className= "pages" src={FullNav} />
            <img className= "name-icon" src={Chandler} />
            <div id="container"> 
                <img className= "sky" src={Picture} />
                <div className="summary">
                    Art has always been a part of my life. Going back as far as elementary school, art was my favorite part of the school day. Drawing and making sketches was my first love because you can do it anywhere and it doesnt cost a lot to get into. However, as I have gotten older,  I have enjoyed learning about different mediums and styles of art. College has allowed me to grow as both an artist and a person. For instance, I took a stained glass class last semester, which was my first experience creating with pieces of glass. I gained many new skills over the course of the semester and I'm grateful for the opportunity to venture into unfamiliar territory.  Over the last four years, I have had the opportunity to diversify my skill set as an artist, as well as my personal portfolio of pieces.
                </div>
            </div>
            <img src={Collection} />
        </>
    );
 };

 export default Hero;